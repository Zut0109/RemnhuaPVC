from django.db import models

class Role(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=13)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)

class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=99)
    size = models.CharField(max_length=12)
    color = models.CharField(max_length=12)
    description = models.CharField(max_length=100)

class PictureItem(models.Model):
    id = models.AutoField(primary_key=True)
    path = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)