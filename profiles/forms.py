from django import forms
from .models import *


class UserRegisterForms(forms.ModelForm):
	class Meta:
		model = UserRegister
		exclude = ('active','created_on','modified_on')