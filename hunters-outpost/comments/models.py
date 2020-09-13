from django.db import models

class Comment(models.Model):
    text = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    mission = models.ForeignKey(
        'mission.Mission',
        related_name='comments',
        on_delete = models.CASCADE
    )
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name="comments_made",
        on_delete=models.CASCADE
    )
    def __str__(self):
        return f'Comment {self.id} - Mission {self.mission}'
# Create your models here.
