from django.db import models

# Create your models here.
# class Base(models.Model):
# 	active = models.BooleanField(default=True)
# 	created_on = models.DatetimeField(auto_now_add=True)
# 	modified_on = models.DatetimeField(auto_now=True)

# GENDER_CHOICES = (('MALE','MALE'),('FEMALE','FEMALE'))

# class UserRegister(Base):
# 	email = models.CharField(max_length=100,unique=True)
# 	first_name = models.CharField(max_length=100)
# 	last_name = models.CharField(max_length=50,blank=True,null=True)
# 	gender = models.CharField(choices=GENDER_CHOICES)
# 	dob = models.DateField()
# 	phone =  models.IntegerField()

# 	def __str__(self):
# 		return self.email
