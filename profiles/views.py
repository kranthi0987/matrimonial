from django.shortcuts import render,HttpResponse
from django.http import HttpResponse
from . forms import *
# Create your views here.


def user_register(request):
	form = UserRegisterForms()
	if request.method == 'POST':
		if form.is_valid():
			form.save()
		else:
			form = UserRegisterForms()

	return render(request,'registration.html',locals())
			
