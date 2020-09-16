from django.db import models

class Mission(models.Model):
    name = models.CharField(max_length=60, unique=False)
    description = models.CharField(max_length=600, unique=False)
    image = models.CharField(max_length=300, blank=True)
# Create your models here.
    category = models.ManyToManyField(
        'category.Category',
        related_name='category'
    )

    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="created_mission",
        on_delete=models.CASCADE
    )

    def __str__(self):
            return f'{self.name}'