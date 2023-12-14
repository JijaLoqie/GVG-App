
from rest_framework import serializers

from carts.models import CartItem


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = ('id', 'cart_id', 'type_item', 'build_id', 'component_id')



class AddCartItemSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('product_type', 'product_id')
