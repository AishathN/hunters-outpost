# Generated by Django 3.1.1 on 2020-09-09 22:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mission', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mission',
            name='image',
            field=models.CharField(blank=True, max_length=300),
        ),
    ]
