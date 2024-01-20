from django.db import models
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Colors(models.Model):
    class Meta:
        verbose_name = "палитра цветов"
        verbose_name_plural = "палитры цветов"

    primary = models.CharField(max_length=9)
    secondary = models.CharField(max_length=9)
    text = models.CharField(max_length=9)
    background = models.CharField(max_length=9)
    accent = models.CharField(max_length=9)


class Telegram(models.Model):
    class Meta:
        verbose_name = "настройка чат бота"
        verbose_name_plural = "настройки чат бота"

    chatId = models.TextField(_("ID чата"), max_length=100)


class Translation(models.Model):
    class Meta:
        verbose_name = "статус трансляции"
        verbose_name_plural = "статусы трансляции"

    enabled = models.BooleanField(_("Режим трансляции"))
    link = models.TextField(_("Ссылка на трансляцию"))
