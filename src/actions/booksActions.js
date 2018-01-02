'use strict'

// Get Books
export function getBooks(){
	return {
		type:"GET_BOOKS"
	}
}

// Post Books
export function postBooks(book){
	return {
		type:"POST_BOOK",
		payload: book
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