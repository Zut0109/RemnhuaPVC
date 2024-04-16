from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from user import views
from user.views import UserListView

urlpatterns = [
    path('', UserListView.as_view(), name='store'),
]
