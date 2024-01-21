# Generated by Django 4.1.10 on 2024-01-21 10:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Component',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Название')),
                ('component_type', models.CharField(choices=[('body', 'Корпус'), ('ssd', 'SSD накопитель'), ('hdd', 'Жёсткий диск'), ('motherboard', 'Материнская плата'), ('cpu', 'Процессор'), ('ram', 'Оперативная память'), ('graphics_card', 'Видеокарта'), ('cpu_cooler', 'Блок питания'), ('other', 'Другое')], max_length=20, verbose_name='Тип товара')),
                ('price', models.IntegerField(verbose_name='Цена')),
                ('old_price', models.IntegerField(blank=True, null=True, verbose_name='Старая цена')),
                ('description', models.TextField(blank=True, max_length=800, verbose_name='Описание')),
                ('status', models.CharField(choices=[('PRESENT', 'Присутствует'), ('ABSENT', 'Отсутствует')], default='PRESENT', max_length=10, verbose_name='Статус')),
                ('video', models.FileField(blank=True, upload_to='static/components/videos/', verbose_name='Видео')),
            ],
            options={
                'verbose_name': 'Компонент',
                'verbose_name_plural': 'Компоненты',
                'db_table': 'component',
            },
        ),
        migrations.CreateModel(
            name='RecommendedComponent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, verbose_name='Кодовое слово')),
                ('title', models.CharField(max_length=100, verbose_name='Название')),
            ],
            options={
                'verbose_name': 'Рекомендация компонентов',
                'verbose_name_plural': 'Рекомендации компонентов',
            },
        ),
        migrations.CreateModel(
            name='ComponentParameter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('parameter_name', models.CharField(max_length=100, verbose_name='Название характеристики')),
                ('parameter_value', models.CharField(max_length=100, verbose_name='Значение')),
                ('component', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ComponentParameter', to='components.component')),
            ],
            options={
                'verbose_name': 'Характеристика',
                'verbose_name_plural': 'Характеристики',
            },
        ),
        migrations.CreateModel(
            name='ComponentImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_id', models.IntegerField(verbose_name='Порядковый номер')),
                ('path', models.ImageField(upload_to='static/components/', verbose_name='Фото')),
                ('component', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ComponentImage', to='components.component')),
            ],
            options={
                'verbose_name': 'Изображение',
                'verbose_name_plural': 'Изобажения',
                'ordering': ('order_id',),
            },
        ),
        migrations.AddField(
            model_name='component',
            name='recomendation_queue',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='recommended_component', to='components.recommendedcomponent', verbose_name='Рекомендательный лист'),
        ),
    ]
