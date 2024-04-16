from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

from store import views
from store.views import ItemListView

urlpatterns = [
    path('', ItemListView.as_view(), name='store'),
    # path('<slug:category_slug>/', views.store, name='products_by_category'),
    # path('<slug:category_slug>/<slug:product_slug>/', views.product_detail, name='product_detail'),
]
