from .models import Order, Category
from .serializers import OrderSerializer, CategorySerializer

from rest_framework import generics


class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all().order_by('-id')
    serializer_class = OrderSerializer

    def perform_create(self, serializer):
        name = serializer.validated_data.get('order_category')
        name_category = Category.objects.get(name=name)
        print(str(name_category))
        serializer.save(category_name=str(name_category))
        return super().perform_create(serializer)


class OrderRetrieveDestroyUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def perform_update(self, serializer):
        name = serializer.validated_data.get('order_category')
        name_category = Category.objects.get(name=name)
        serializer.save(category_name=str(name_category))
        return super().perform_update(serializer)


class CategoryListCreate(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRetrieveDestroyUpdate(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
