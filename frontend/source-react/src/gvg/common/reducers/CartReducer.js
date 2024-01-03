const CartReducer = (state = {}, action = {}) => {
  switch (action.type) {

    case 'buy': {
      let products = state.products ? [...state.products] : []
      const existing = products.findIndex(
        (item) => item.id === action.payload.id && item.type === action.payload.type
      )
      if (existing !== -1) {
        products[existing] = { ...products[existing], quantity: products[existing].quantity + 1 }
      } else {
        products.push(({ quantity: 1, ...action.payload }))
      }
      return {
        ...state,
        products,
      }
    }

    case 'remove': {
      let products = state.products ? [...state.products] : []
      const existing = products.findIndex(
        (item) => item.id === action.payload.id && item.type === action.payload.type
      )
      if (existing !== -1) {
        products[existing] = { ...products[existing], quantity: products[existing].quantity - 1 }
        products = products.filter((product => product.quantity !== 0))
      }
      return {
        ...state,
        products,
      }
    }

    case 'remove-all': {
      let products = state.products ? [...state.products] : []
      products = products.filter(
        (item) => item.id !== action.payload.id || item.type !== action.payload.type
      )
      return {
        ...state,
        products: products,
      }
    }

    case 'clear': {
      return {
        ...state,
        products: []
      }
    }
    case 'debug': {
      console.log(state)
      return { ...state }
    }
    default: {
      return { ...state }
    }
  }
}

export default CartReducer

