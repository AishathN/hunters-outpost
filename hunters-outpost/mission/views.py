from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied


from .models import Mission
from .serializers import PopulatedMissionSerializer, MissionSerializer
# in the above the populated one is read and the other is write

class MissionListView(APIView):

    def get(self, request):
        missions = Mission.objects.all()
        serialized_missions = PopulatedMissionSerializer(missions, many=True)
        return Response(serialized_missions.data, status=status.HTTP_200_OK)

    def post(self, request):
        new_mission = MissionSerializer(data=request.data)
        if new_mission.is_valid():
            new_mission.save()
            return Response(new_mission.data, status=status.HTTP_201_CREATED)
        return Response(new_mission.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class MissionDetailView(APIView):

    def get_mission(self, pk):
        try:
            return Mission.objects.get(pk=pk)
        except Mission.DoesNotExist:
            raise NotFound()

    def get(self, request, pk):
        mission = self.get_mission(pk)
        serialized_mission = PopulatedMissionSerializer(mission)
        return Response(serialized_mission.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        mission_to_update = self.get_mission(pk=pk)
        updated_mission = MissionSerializer(mission_to_update, data=request.data)
        if updated_mission.is_valid():
            updated_mission.save()
            return Response(updated_mission.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_mission.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

# Create your views here.
