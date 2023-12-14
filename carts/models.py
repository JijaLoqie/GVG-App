from django.db import models

# Create your models here.
class Cart(models.Model):
    user = models.CharField(max_length=50, unique=True)




class CartItem(models.Model):
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)

    TYPE_ITEM_ENUM = [
        ("BUILD", "build"),
        ("COMPONENT", "component"),
    ]
    type_item = models.CharField(max_length=10, choices=TYPE_ITEM_ENUM, default="BUILD")

    build_id = models.ForeignKey("builds.Build", on_delete=models.SET_NULL, null=True, blank=True)
    component_id = models.ForeignKey("components.Component", on_delete=models.SET_NULL, null=True, blank=True)

