from django.urls import path
from .views import RegisterView, LoginView, ProfileView, UserView, UserSpecificView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('profile/', ProfileView.as_view()),
    path('users/<int:pk>/', UserView.as_view()),
    path('users/', UserSpecificView.as_view())
]
