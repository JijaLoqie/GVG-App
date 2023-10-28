

from django.contrib import admin
from django.utils.html import format_html

from .models import Build, Images


class ImageInline(admin.TabularInline):  
    model = Build.image_list.through  
    
    extra = 0  # Определите количество дополнительных форм для добавления картинок
	
    
    def render_image(self, instance):
        if instance.images.image.url:
            return format_html('<img src="{}" width="100" />'.format(instance.images.image.url))
        else:
            return "No image"
    render_image.short_description = 'Preview'
    
    
    fields = ('sort_value', 'images', 'render_image',)
    readonly_fields = ('sort_value', 'render_image',)
    
    
    

class BuildsAdmin(admin.ModelAdmin):
    inlines = [ImageInline]  # Включите инлайн ImageInline


class ImagesAdmin(admin.ModelAdmin):
    list_display = ('image_title', 'render_image', 'image')
    field = ('image_title', 'render_image', 'image')
    
    def render_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="400" />'.format(obj.image.url))
        else:
            return "No image"
    
    render_image.short_description = 'Preview'
    render_image.allow_tags = True
    
    
    readonly_fields = ('render_image', )
    
    
    


admin.site.register(Build, BuildsAdmin)
admin.site.register(Images, ImagesAdmin)
