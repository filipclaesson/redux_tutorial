'use strict'

// ADD TO CART
export function addToCart(book){
	return {
		type:"ADD_TO_CART",
		payload: book
	}
}

// DELETE FROM CART
export function deleteCartItem(cart){
	return {
		type:"DELETE_CART_ITEM",
		payload: cart
	}
}

// ADD TO CART
export function updateCart(id,unit){
	return {
		type:"UPDATE_CART",
		id:id,
		unit:unit
	}
}