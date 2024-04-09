from django.views.generic import ListView
from my_app.models import User,Role

class UserView(ListView):
    model = User
    template_name = 'users.html'
    context_object_name = 'users'
class RoleView(ListView):
    model = Role
    template_name = 'roles.html'
    context_object_name = 'roles'
class HomeView(ListView):
    model = Item, Category
    template_name = 'home.html'
    context_object_name = 'items'
