# Generated by Django 4.2.7 on 2023-12-01 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('components', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='images',
            name='image',
            field=models.ImageField(upload_to='static/components/', verbose_name='Фото'),
        ),
    ]
