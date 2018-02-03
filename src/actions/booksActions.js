'use strict'
import axios from 'axios';

// Get Books
export function getBooks(){
	return function(dispatch){
		axios.get("/books")
		.then(function(response){
			dispatch({type:"GET_BOOK", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"GET_BOOK_REJECTED", payload:err})
		})
	}
}

// Post Books
export function postBooks(book){
	return function(dispatch){
		axios.post("/books", book)
		.then(function(response){
			dispatch({type:"POST_BOOK", payload:response.data})
		})
		.catch(function(err){
			dispatch({type:"POST_BOOK_REJECTED", payload:"There was an error"})
		})
	}
}

// Delete Books
export function deleteBooks(id){
	return {
		type:"DELETE_BOOK",
		payload: id
	}
}

// Update Books
export function updateBooks(book){
	return {
		type:"UPDATE_BOOK",
		payload: book
	}
}