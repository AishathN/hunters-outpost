from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    profile_image = models.CharField(max_length=500, blank=True)
    about_me = models.CharField(max_length=500, blank=True)
    points = models.IntegerField(default=0)

#     {
#   "email": "aisha@email.com",
# 	"profile_image": "--",
# 	"about_me": "about this person",
#   "password": "passthingie",
# 	"password": "passthingie"
# }