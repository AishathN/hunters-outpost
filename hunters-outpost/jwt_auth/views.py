from datetime import datetime, timedelta
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied , NotFound
from rest_framework.permissions import IsAuthenticated , IsAuthenticatedOrReadOnly
from rest_framework import status
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

from .serializers import UserSerializer, PopulatedUserSerializer
User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        created_user = UserSerializer(data=request.data)
        if created_user.is_valid():
            created_user.save()
            return Response({'message': 'Registration complete'}, status=status.HTTP_201_CREATED)
        return Response(created_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Username/Login'})

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid Username/Login'})
        dt = datetime.now() + timedelta(days=21)
        token = jwt.encode(
            {'sub': user.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        return Response({'token': token, 'message': f'Greetings {user.username}'})

class ProfileView(APIView):

    permission_classes = (IsAuthenticated, IsAuthenticatedOrReadOnly)

    def get(self, request):
        user = User.objects.get(pk=request.user.id)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data)

class UserView(APIView):

    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise NotFound()    

    def get(self, request, pk):
        user = self.get_user(pk)
        serialized_user = UserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK)

    # def put(self, request, pk):
    #     user_to_update = self.get_user(pk=pk)
    #     updated_user = UserSerializer(user_to_update, data=request.data)
        # if updated_user.is_valid():
        #     updated_user.save()
        #     return Response(updated_user.data, status=status.HTTP_202_ACCEPTED)
    #     return Response(updated_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def put(self, request, pk):
        print(request.data)
        user_to_update = User.objects.get(pk=pk)
        user_to_update.points = user_to_update.points + 1
        print(user_to_update.points)
        user_to_update.save()
        serialized_user = UserSerializer(user_to_update)
        # if serialized_user.is_valid():
        #     serialized_user.save()
        return Response(serialized_user.data, status=status.HTTP_202_ACCEPTED)
        # return Response(serialized_user.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        # return Response({"message": "Hello World"})
        

class UserSpecificView(APIView):

    def get(self, request):
        users = User.objects.all()
        serialized_users = PopulatedUserSerializer(users, many=True)
        return Response(serialized_users.data, status=status.HTTP_200_OK)
