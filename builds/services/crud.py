from builds.models import Build
from builds.serializers import *

def get_builds():
    return Build.objects.all()

def get_build_by_name(title):
    try:
        build = Build.objects.get(title = title)
        return build
    except Build.DoesNotExist:
        return None
    