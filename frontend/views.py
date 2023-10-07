from django.shortcuts import render, redirect



def redirect_index(request, *args, **kwargs):
	return redirect('/home/')


def index(request, *args, **kwargs):
	return render(request, 'frontend/index.html')
