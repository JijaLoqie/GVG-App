# Generated by Django 4.2.6 on 2023-10-21 20:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('builds', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='images',
            name='build',
        ),
    ]