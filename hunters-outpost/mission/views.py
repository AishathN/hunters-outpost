from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied


from .models import Mission
from .serializers import PopulatedMissionSerializer

class MissionListView(APIView):

    def get(self, request):
        missions = Mission.objects.all()
        serialized_missions = PopulatedMissionSerializer(missions, many=True)
        return Response(serialized_missions.data, status=status.HTTP_200_OK)

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
# Create your views here.
