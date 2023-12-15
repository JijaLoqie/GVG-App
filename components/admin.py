from django.contrib import admin
from django.utils.html import format_html

from .models import Component, ComponentImage, ComponentParameter, RecommendedComponent


class ImageInline(admin.TabularInline):
    model = ComponentImage
    
    extra = 0
	

    def render_image(self, instance):
        if instance.path:
            return format_html('<img srcSet="{}" width="200" />'.format(instance.path.url))
        else:
            return "No image"
    render_image.short_description = 'Preview'
    
    
    fields = ( 'order_id', 'path', 'render_image',)
    readonly_fields = ('render_image',)
    
    
class ParameterInline(admin.TabularInline):
    model = ComponentParameter
    
    extra = 0
	

    fields = ( 'parameter_name', 'parameter_value')
    

class ComponentAdmin(admin.ModelAdmin):
    inlines = [ImageInline, ParameterInline]





class ComponentInline(admin.TabularInline):
    model = Component

    extra = 0

    fields = ('id', 'title',)
    readonly_fields = ('id', 'title')

 




class RecommendedComponentAdmin(admin.ModelAdmin):
    inlines = [ComponentInline]







admin.site.register(Component, ComponentAdmin)

admin.site.register(RecommendedComponent, RecommendedComponentAdmin)






