from django.contrib import admin

from django.utils.html import format_html
from .models import Component, Images


# поле, отображается в самом низу модели "сборка"
class ImageInline(admin.TabularInline):  
    model = Component.image_list.through
    
    extra = 0  
	
    
    def render_image(self, instance):
        if instance.images.image.url:
            return format_html('<img src="{}" width="100" />'.format(instance.images.image.url))
        else:
            return "No image"
    render_image.short_description = 'Preview'
    
    
    fields = ('sort_value', 'images', 'render_image',)
    readonly_fields = ('sort_value', 'render_image',)
    
    
    

class ComponentAdmin(admin.ModelAdmin):
    inlines = [ImageInline]  # Включите инлайн ImageInline


class ImageAdmin(admin.ModelAdmin):
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
    
    
    


admin.site.register(Component, ComponentAdmin)
admin.site.register(Images, ImageAdmin)