from django.urls import path

from carts.crud import AddCartItem, CartItems, DeleteCartItem




urlpatterns = [
    path("api/get-items", CartItems.as_view()),
    path("api/add-new-item", AddCartItem.as_view()),
    path("api/remove-item", DeleteCartItem.as_view()),
]
