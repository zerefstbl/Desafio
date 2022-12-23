from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Order(models.Model):
    category_name = models.CharField(max_length=100, blank=True, null=True)
    contact_name = models.CharField(max_length=100)
    contact_phone = models.PositiveIntegerField()
    estate_agency = models.CharField(max_length=255)
    order_description = models.TextField()
    company = models.CharField(max_length=100)
    deadline = models.DateField()
    order_category = models.ForeignKey(Category, on_delete=models.PROTECT)

    def __str__(self):
        return f'{self.contact_name} - {self.contact_phone}'
