from django.contrib import admin
from django.utils.html import format_html

from .models import Build, BuildImage, RecommendedBuild


class ImageInline(admin.TabularInline):
    model = BuildImage
    
    extra = 0
	

    def render_image(self, instance):
        if instance.path:
            return format_html('<img srcSet="{}" width="200" />'.format(instance.path.url))
        else:
            return "No image"
    render_image.short_description = 'Preview'
    
    
    fields = ( 'order_id', 'path', 'render_image',)
    readonly_fields = ('render_image',)
    
    
    

class BuildsAdmin(admin.ModelAdmin):
    inlines = [ImageInline]






 

class BuildInline(admin.TabularInline):
    model = RecommendedBuild.build_list.through

    extra = 0



class RecommendedBuildsAdmin(admin.ModelAdmin):
    inlines = [BuildInline]








admin.site.register(Build, BuildsAdmin)

admin.site.register(RecommendedBuild, RecommendedBuildsAdmin)






