from django.views.generic import ListView
from rest_framework.response import Response
from rest_framework.views import APIView

from store.serializer import *


# Create your views here.
class ItemListView(APIView):
    serializer_class = ItemSerilizer
    def get(self, request):
        detail = [{"name": detail.name, "price": detail.price, "size": detail.size, "color": detail.color, "description": detail.description}
                  for detail in Item.objects.all()]
        return Response(detail)
    def post(self, request):
        serializer = ItemSerilizer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)