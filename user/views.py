from django.views.generic import ListView
from rest_framework.response import Response
from rest_framework.views import APIView

from user.models import *
from user.serializer import *


# Create your views here.
class UserListView(APIView):
    serializer_class = UserSerializer
    def get(self, request):
        detail = [{"first_name": detail.first_name, "last_name": detail.last_name, "username": detail.username, "phone_number": detail.phone_number, "date_joined":detail.date_joined, "last_login": detail.last_login ,"is_admin": detail.is_admin, "is_active": detail.is_active, "is_staff": detail.is_staff, "is_superadmin": detail.is_superadmin}
                  for detail in User.objects.all()]
        return Response(detail)
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)