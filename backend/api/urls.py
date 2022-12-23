from django.urls import path

from .views import OrderListCreate, OrderRetrieveDestroyUpdate, CategoryListCreate, CategoryRetrieveDestroyUpdate

urlpatterns = [
    path('', OrderListCreate.as_view(), name='list_orders'),
    path('<int:pk>', OrderRetrieveDestroyUpdate.as_view(), name='delete_order'),
    path('category/<int:pk>', CategoryRetrieveDestroyUpdate.as_view(),
         name='delete_category'),
    path('category', CategoryListCreate.as_view(), name='list_category'),
]
