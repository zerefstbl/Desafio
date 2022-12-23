from django.contrib import admin

from .models import Order, Category

admin.site.register(Order)
admin.site.register(Category)
