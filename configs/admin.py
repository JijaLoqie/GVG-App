from django.contrib import admin

from configs.models import Colors, Telegram, Translation

# Register your models here.


admin.site.register(Colors)
admin.site.register(Telegram)
admin.site.register(Translation)
