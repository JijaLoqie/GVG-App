# Generated by Django 4.2.8 on 2023-12-04 13:30

from django.db import migrations, models
import sortedm2m.fields


class Migration(migrations.Migration):

    dependencies = [
        ('components', '0002_alter_images_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='ComponentParameter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rus_name', models.CharField(max_length=100, verbose_name='Название характеристики')),
                ('value', models.CharField(max_length=100, verbose_name='Значение характеристики')),
            ],
            options={
                'verbose_name': 'Характеристика компонента',
                'verbose_name_plural': 'Характиеистики компонентов',
            },
        ),
        migrations.AddField(
            model_name='component',
            name='params',
            field=sortedm2m.fields.SortedManyToManyField(blank=True, help_text=None, related_name='components', to='components.componentparameter'),
        ),
    ]
