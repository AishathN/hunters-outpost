from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    profile_image = models.CharField(max_length=500, blank=True)
    about_me = models.CharField(max_length=500, blank=True)
    points = models.IntegerField(default=0)
    def __str__(self):
                return f'{self.username}'
#  {
#   "email": "dada@email.com",
# 	"username":"dad",
# 	"profile_image": "--",
# 	"about_me": "about this person",
#   "password": "passthingie",
# 	"password_confirmation": "passthingie"
# }