

function mainShopReduser(state , action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return {...state, cart: [...state.cart, action.payload]}
      break;
      case 'DELETE_PRODUCT_INTO_CART':
        console.log( state);
        let index = state.cart.findIndex(item => item.product.id == action.payload)
      let newCart = state.cart
      newCart.splice(index,1 ) 
        return {...state, cart:newCart}
        break;
    default:
      return {...state}
      break;
  }

}
export default mainShopReduser;
