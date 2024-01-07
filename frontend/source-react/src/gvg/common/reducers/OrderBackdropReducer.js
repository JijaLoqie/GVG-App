const OrderBackdropReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case 'open': {
      let isOpen = state.isOpen ?? false
      let productInfo = action.payload ?? null
      isOpen = true
      return {
        ...state,
        productInfo: productInfo === null ? null : { ...productInfo, quantity: 1 },
        isOpen,
      }
    }
    case 'close': {
      let isOpen = state.isOpen ?? false
      isOpen = false
      let productInfo = null
      return {
        ...state,
        productInfo,
        isOpen,
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default OrderBackdropReducer


