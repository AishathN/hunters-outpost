from rest_framework import serializers
from comments.serializers import PopulatedCommentSerializer, UserSerializer
from category.serializers import CategorySerializer
from .models import Mission

class MissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mission
        fields = '__all__'

class PopulatedMissionSerializer(MissionSerializer):

    owner = UserSerializer()
    comments = PopulatedCommentSerializer(many=True)
    category = CategorySerializer(many=True)