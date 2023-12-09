from django.db import models
from django.utils.translation import gettext_lazy as _
from sortedm2m.fields import SortedManyToManyField
from django.utils.html import format_html

class Build(models.Model):
    """Сборка компьютера (Товар)"""

    class Meta:
        db_table = "build"
        verbose_name = "Сборка"
        verbose_name_plural = "Сборки" 
        
    
    STATUS_ENUM = [
        ("PRESENT", _("Присутствует")),
        ("ABSENT", _("Отсутствует")),
    ]
 
    # Общая информация
    title = models.CharField(_("Название"), max_length=100)
    price = models.IntegerField(_("Цена"))
    old_price = models.IntegerField(_("Старая цена"), blank=True, null=True)
    description = models.TextField(_("Описание"), max_length=800, blank=True)
    status = models.CharField(_("Статус"), max_length=10, choices=STATUS_ENUM, default="PRESENT")
    
    # Компоненты сборки
    body = models.CharField(_("Корпус"), max_length=100, blank=True)
    ssd = models.CharField(_("SSD накопитель"), max_length=100, blank=True)
    hdd = models.CharField(_("Жёсткий диск"), max_length=100, blank=True)
    motherboard = models.CharField(_("Материнская плата"), max_length=40, blank=True)
    cpu = models.CharField(_("Процессор"), max_length=100, blank=True)
    ram = models.CharField(_("Оперативная память"), max_length=100, blank=True)
    graphics_card = models.CharField(_("Видеокарта"), max_length=100, blank=True)
    power_supply = models.CharField(_("Блок питания"), max_length=100, blank=True)
    cpu_cooler = models.CharField(_("Процессорный куллер"), max_length=100, blank=True)

    
    video = models.FileField(_("Видео"), upload_to='builds/videos/', blank=True)

    
    def __str__(self):
        return self.title


class BuildImage(models.Model):
    class Meta:
        verbose_name = "Изобрежение"
        verbose_name_plural = "Изобажения" 
        ordering = ('order_id',)

    order_id = models.IntegerField(_("Порядковый номер"))
    build = models.ForeignKey(Build, on_delete=models.CASCADE, related_name="BuildImage")
    path = models.ImageField(_("Фото"), blank=False, upload_to="static/builds")
    
    
    def __str__(self):
        return str(self.path)
