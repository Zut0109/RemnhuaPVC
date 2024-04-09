from django.views.generic import ListView
from rest_framework.response import Response
from rest_framework.views import APIView

from my_app.models import User,Role
from my_app.serializer import UserSerializer


class UserView(ListView):
    model = User
    template_name = 'users.html'
    context_object_name = 'users'
class RoleView(ListView):
    model = Role
    template_name = 'roles.html'
    context_object_name = 'roles'

class TestReactView(APIView):
    serializer_class = UserSerializer

    def get(self, request):
        detail = [{"name": detail.name, "detail": detail.detail}
                  for detail in User.objects.all()]
        return Response(detail)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)