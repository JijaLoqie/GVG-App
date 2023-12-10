# Generated by Django 4.2.8 on 2023-12-04 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('components', '0004_remove_component_params_delete_componentparameter_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='component',
            name='image_list',
        ),
        migrations.AddField(
            model_name='component',
            name='image',
            field=models.ImageField(blank=True, upload_to='', verbose_name='Фото'),
        ),
        migrations.AlterField(
            model_name='component',
            name='params',
            field=models.TextField(default='', verbose_name='Параметры'),
        ),
        migrations.DeleteModel(
            name='Images',
        ),
    ]