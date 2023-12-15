from loguru import logger
from rest_framework import generics
from rest_framework.views import APIView, Response, status

from carts.models import Cart, CartItem
from carts.serializers import AddCartItemSerializer, CartItemSerializer

from builds.models import Build
from components.models import Component
from builds.serializers import BuildSerializer
from components.serializers import ComponentSerializer



class CartItems(APIView):

    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()


        user_id = self.request.session.session_key

        queryset = Cart.objects.filter(user=user_id)
        if queryset.exists():
            cart = queryset[0]
            cart_items = CartItem.objects.filter(cart_id=cart)
            
            serialised = CartItemSerializer(cart_items, many=True)
            
            return Response(serialised.data, status=status.HTTP_200_OK)

        else:
            cart = Cart(user=user_id)
            cart_items = CartItem.objects.filter(cart_id=cart)
            cart.save()
            return Response([], status=status.HTTP_201_CREATED)
    



class DeleteCartItem(APIView):

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()



        try:
            cart_item_id = request.data['cart_item_id']
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)

        
        queryset = CartItem.objects.filter(id=cart_item_id)

        if queryset.exists():
            cart_item = queryset[0]
            cart_item.delete()
            return Response(CartItemSerializer(cart_item).data, status=status.HTTP_200_OK)
        else:
            return Response("No such cart item", status.HTTP_404_NOT_FOUND)



class AddCartItem(APIView):
    serializer_class = AddCartItemSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        try:
            product_type = request.data['product_type']
            product_id = request.data['product_id']
        except Exception as e:
            return Response(e, status=status.HTTP_400_BAD_REQUEST)


        user_id = self.request.session.session_key
        queryset = Cart.objects.filter(user=user_id)

        if queryset.exists():
            cart = queryset[0]
        else:
            cart = Cart(user=user_id)
            cart.save()

        cart_item = CartItem(cart_id = cart, type_item=product_type)

        if product_type == "component":
            componentset = Component.objects.filter(id=product_id)
            if componentset.exists():
                component = componentset[0]
                cart_item.component_id = component
                if not CartItem.objects.filter(component_id=component).exists():
                    cart_item.save()
                else:
                    return Response("This build already added!", status=status.HTTP_304_NOT_MODIFIED)
                return Response(ComponentSerializer(component).data, status=status.HTTP_200_OK)
            else:
                return Response("No such component!")

        if product_type == "build":
            buildset = Build.objects.filter(id=product_id)
            if buildset.exists():
                build = buildset[0]
                cart_item.build_id = build
                if not CartItem.objects.filter(build_id=build).exists():
                    cart_item.save()
                else:
                    return Response("This build already added!", status=status.HTTP_304_NOT_MODIFIED)

                return Response(BuildSerializer(build).data, status=status.HTTP_200_OK)
            else:
                return Response("No such build!", status=status.HTTP_400_BAD_REQUEST)











