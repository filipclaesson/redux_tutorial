'use strict'

export function cartReducers(state={cart:[]}, action){
	switch(action.type){
		case "ADD_TO_CART":
		return {cart:[...state.cart, ...action.payload]}
		break;
		case "DELETE_CART_ITEM":
		return {cart:[...action.payload]}
		case "UPDATE_CART":
		const currentBookToUpdate = [...state.cart]
		console.log(action.id)
		const indexToUpdate = currentBookToUpdate.findIndex((cart)=>{
			return cart.id === action.id;
		})
		const newBookToUpdate = {
			...currentBookToUpdate[indexToUpdate], 
			quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit 
		}
		let newUpdatedCart = [...currentBookToUpdate.slice(0,indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate +1)]
		
		return {...state, cart:newUpdatedCart}
		break;
	}
	return state;
}