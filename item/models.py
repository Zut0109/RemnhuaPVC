from django.db import models

# Create your models here.
class Item(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    size = models.CharField(max_length=12)
    color = models.CharField(max_length=12)
    description = models.CharField(max_length=100)

class PictureItem(models.Model):
    id = models.AutoField(primary_key=True)
    path = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)