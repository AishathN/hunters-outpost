from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from .models import Comment

from .serializers import CommentSerializer

class CommentListView(APIView):

    def post(self, request):
        created_comment = CommentSerializer(data=request.data)
        if created_comment.is_valid():
            created_comment.save()
            return Response(created_comment.data, status=status.HTTP_201_CREATED)
        return Response(created_comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CommentDetailView(APIView):

    def get_comment(self, pk):
        try:
            return Comment.objects.get(pk=pk)
        except Comment.DoesNotExist:
            raise NotFound()

    def delete(self, request, pk):
        comment_to_delete = self.get_comment(pk)
        comment_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)