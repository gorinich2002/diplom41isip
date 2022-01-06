function addProductToCartAction(product, count){
  return{
    type: 'ADD_PRODUCT_TO_CART',
    payload: {product: product,count:count}
  }
}
function deleteProductIntoCartAction(productId){
  return{
    type: 'DELETE_PRODUCT_INTO_CART',
    payload: productId
  }
}
export  {addProductToCartAction, deleteProductIntoCartAction};