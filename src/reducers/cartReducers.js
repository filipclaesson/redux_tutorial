'use strict'

export function cartReducers(state={cart:[]}, action){
	switch(action.type){
		case "ADD_TO_CART":
		return {
			cart:[...state.cart, ...action.payload]
			,totalAmount:totals(action.payload).amount
			,totalQty: totals(action.payload).qty
		}
		break;
		case "DELETE_CART_ITEM":
		return {cart:[...action.payload], totalAmount:totals(action.payload).amount,totalQty: totals(action.payload).qty}
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
		
		return {...state, cart:newUpdatedCart, totalAmount:totals(newUpdatedCart).amount,totalQty: totals(newUpdatedCart).qty}
		break;
	}
	return state;
}

// Calculate totals

export function totals(payloadArr){
	const totalAmount = payloadArr.map((cartArr)=>{
		return cartArr.price * cartArr.quantity;
	}).reduce((a,b)=>{
		return a+b;
	}, 0)

	const totalQty = payloadArr.map((qty)=>{
		return qty.quantity;
	}).reduce((a,b)=>{
		return a+b;
	}, 0)

	return {amount:totalAmount.toFixed(2), qty:totalQty}
}
