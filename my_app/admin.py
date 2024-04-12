from django.contrib import admin

from my_app.models import User, Role, Item

admin.site.register(User)
admin.site.register(Role)
admin.site.register(Item)