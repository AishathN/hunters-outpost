from django.urls import path
from.views import MissionListView, MissionDetailView

urlpatterns = [
    path('', MissionListView.as_view()),
    path('<int:pk>/', MissionDetailView.as_view())
]
