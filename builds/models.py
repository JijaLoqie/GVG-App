from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Build(models.Model):
	"""Сборка компьютера (Товар)"""

	class Meta:
		db_table = "build"
	
	build_id = models.PositiveIntegerField(primary_key=True)

	
	# Компоненты сборки
	body = models.CharField(_("Корпус"), max_length=40, blank=True)
	ssd = models.CharField(_("SSD накопитель"), max_length=40, blank=True)
	motherboard = models.CharField(_("Материнская плата"), max_length=40, blank=True)
	cpu = models.CharField(_("Процессор"), max_length=40, blank=True)
	ram = models.CharField(_("Оперативная память"), max_length=40, blank=True)
	graphics_card = models.CharField(_("Видеокарта"), max_length=40, blank=True)
	power_supply = models.CharField(_("Блок питания"), max_length=40, blank=True)
	cpu_cooler = models.CharField(_("Процессорный куллер"), max_length=40, blank=True)


	STATUS_ENUM = [
        ("PRESENT", _("Присутствует")),
        ("ABSENT", _("Отсутствует")),
    ]
	# Общая информация
	title = models.CharField(_("Название"), max_length=40)
	description = models.CharField(_("Описание"), max_length=200, blank=True)
	price = models.IntegerField(_("Цена"))
	old_price = models.IntegerField(_("Старая цена"), blank=True)
	status = models.CharField(_("Статус"), max_length=10, choices=STATUS_ENUM)


class Images(models.Model):
	build_id = models.ForeignKey(Build, on_delete=models.CASCADE)
	image = models.ImageField()