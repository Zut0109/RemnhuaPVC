from rest_framework import serializers
from .models import *


class ItemSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'price', 'size', 'color', 'description']

class PictureItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PictureItem
        fields = ['id', 'path', 'description','item']
