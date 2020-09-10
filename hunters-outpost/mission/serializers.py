from rest_framework import serializers
from comments.serializers import CommentSerializer
from category.serializers import CategorySerializer
from .models import Mission

class MissionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mission
        fields = '__all__'

class PopulatedMissionSerializer(MissionSerializer):

    comments = CommentSerializer(many=True)
    category = CategorySerializer(many=True)