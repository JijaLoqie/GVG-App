from django.db import models
from django.utils.translation import gettext_lazy as _

class Component(models.Model):
    """Компонент сборки (Товар)"""

    class Meta:
        db_table = "component"
        verbose_name = "Компонент"
        verbose_name_plural = "Компоненты" 
        
    
    STATUS_ENUM = [
        ("PRESENT", _("Присутствует")),
        ("ABSENT", _("Отсутствует")),
    ]

    TYPE_ENUM = [
        ("body", _("Корпус")),
        ("ssd", _("SSD накопитель")),
        ("hdd", _("Жёсткий диск")),
        ("motherboard", _("Материнская плата")),
        ("cpu", _("Процессор")),
        ("ram", _("Оперативная память")),
        ("graphics_card", _("Видеокарта")),
        ("cpu_cooler", _("Блок питания")),
        ("other", _("Другое")),
    ]
 
    # Общая информация
    title = models.CharField(_("Название"), max_length=100)
    component_type = models.CharField(_("Тип товара"), max_length=20, choices=TYPE_ENUM)
    price = models.IntegerField(_("Цена"))
    old_price = models.IntegerField(_("Старая цена"), blank=True, null=True)
    description = models.TextField(_("Описание"), max_length=800, blank=True)
    status = models.CharField(_("Статус"), max_length=10, choices=STATUS_ENUM, default="PRESENT")
    
    
    video = models.FileField(_("Видео"), upload_to='static/components/videos/', blank=True)
    params = models.TextField(_("Параметры"), default="")


    
    recomendation_queue = models.ForeignKey("RecommendedComponent", blank=True, null=True, on_delete=models.SET_NULL, verbose_name=_("Рекомендательный лист"), related_name="recommended_component")
    def __str__(self):
        return self.title



class RecommendedComponent(models.Model):
    class Meta:
        verbose_name = "Рекомендация компонентов"
        verbose_name_plural = "Рекомендации компонентов"


    code = models.CharField(_("Кодовое слово"), max_length=10 )
    title = models.CharField(_("Название"), max_length=100)
    
    def __str__(self):
        return self.title





class ComponentImage(models.Model):
    class Meta:
        verbose_name = "Изображение"
        verbose_name_plural = "Изобажения" 
        ordering = ('order_id',)

    order_id = models.IntegerField(_("Порядковый номер"))
    component = models.ForeignKey(Component, on_delete=models.CASCADE, related_name="ComponentImage")
    path = models.ImageField(_("Фото"), blank=False, upload_to="static/components/")
    
    
    def __str__(self):
        return str(self.path)
