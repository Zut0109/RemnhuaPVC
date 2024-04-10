from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'password', 'address', 'phone', 'role', 'is_active']

class ItemSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'price', 'size', 'color', 'description']

class PictureItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PictureItem
        fields = ['id', 'path', 'description','item']
