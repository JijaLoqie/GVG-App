# Generated by Django 4.2.7 on 2023-11-28 21:14

from django.db import migrations, models
import sortedm2m.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='builds/', verbose_name='Фото')),
                ('image_title', models.CharField(max_length=40, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Изобрежение',
                'verbose_name_plural': 'Изобажения',
            },
        ),
        migrations.CreateModel(
            name='Build',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Название')),
                ('price', models.IntegerField(verbose_name='Цена')),
                ('old_price', models.IntegerField(blank=True, null=True, verbose_name='Старая цена')),
                ('description', models.TextField(blank=True, max_length=800, verbose_name='Описание')),
                ('status', models.CharField(choices=[('PRESENT', 'Присутствует'), ('ABSENT', 'Отсутствует')], default='PRESENT', max_length=10, verbose_name='Статус')),
                ('body', models.CharField(blank=True, max_length=100, verbose_name='Корпус')),
                ('ssd', models.CharField(blank=True, max_length=100, verbose_name='SSD накопитель')),
                ('hdd', models.CharField(blank=True, max_length=100, verbose_name='Жёсткий диск')),
                ('motherboard', models.CharField(blank=True, max_length=40, verbose_name='Материнская плата')),
                ('cpu', models.CharField(blank=True, max_length=100, verbose_name='Процессор')),
                ('ram', models.CharField(blank=True, max_length=100, verbose_name='Оперативная память')),
                ('graphics_card', models.CharField(blank=True, max_length=100, verbose_name='Видеокарта')),
                ('power_supply', models.CharField(blank=True, max_length=100, verbose_name='Блок питания')),
                ('cpu_cooler', models.CharField(blank=True, max_length=100, verbose_name='Процессорный куллер')),
                ('video', models.FileField(blank=True, upload_to='builds/videos/', verbose_name='Видео')),
                ('image_list', sortedm2m.fields.SortedManyToManyField(blank=True, help_text=None, related_name='builds', to='builds.images')),
            ],
            options={
                'verbose_name': 'Сборка',
                'verbose_name_plural': 'Сборки',
                'db_table': 'build',
            },
        ),
    ]
