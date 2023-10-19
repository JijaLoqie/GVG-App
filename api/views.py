from django.shortcuts import render, HttpResponse

# Create your views here.
def hello_view(request, **params):
    return HttpResponse(f"<h1>HEllO!{params}</h1>")