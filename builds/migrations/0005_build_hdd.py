# Generated by Django 4.2.6 on 2023-10-23 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('builds', '0004_alter_build_body_alter_build_cpu_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='build',
            name='hdd',
            field=models.CharField(blank=True, max_length=100, verbose_name='Жёсткий диск'),
        ),
    ]