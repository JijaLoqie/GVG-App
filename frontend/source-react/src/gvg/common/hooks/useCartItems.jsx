import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export function useCartItems() {
  const [cartItems, setCartItems] = useState([])

  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
  
  const addCartItem = (product_type, product_id) => {
    const CSRF_TOKEN = getCookie("csrftoken")
    fetch("/carts/api/add-new-item", {
      credentials: 'include',
      method: 'POST',
      mode: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': CSRF_TOKEN,
      },
      body: JSON.stringify({
        product_type: product_type,
        product_id: product_id,
      })
    }).then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw response.statusText
        }
      }).then((data) => {
        console.log(data)
        fetchCartItems()
      }).catch(error => {
        console.log(error)
      })
  }
  const removeCartItem = (cartItemId) => {
    const CSRF_TOKEN = getCookie("csrftoken")
    fetch("/carts/api/remove-item", {
      credentials: 'include',
      method: 'POST',
      mode: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRFToken': CSRF_TOKEN,
      },
      body: JSON.stringify({
        cart_item_id: cartItemId,
      })
    }).then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw response.statusText
        }
      }).then((data) => {
        console.log(data)
        fetchCartItems()
      }).catch(error => {
        console.log(error)
      })
  }


  const fetchCartItems = useCallback(() => {
    axios.get("/carts/api/get-items").then(response => {
      setCartItems(response.data)
    }).catch(error => {
        console.log(error)
      })
  }, [])


  useEffect(() => {
    fetchCartItems()
  }, [fetchCartItems])

  return {cartItems, fetchCartItems, addCartItem, removeCartItem}
  
}
