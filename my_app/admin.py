from django.contrib import admin

from my_app.models import User,Role

admin.site.register(User)
admin.site.register(Role)