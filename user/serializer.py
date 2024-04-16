from rest_framework import serializers

from user.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email', 'phone_number', 'date_joined', 'last_login', 'is_active', 'is_admin', 'is_staff', 'is_superadmin']

