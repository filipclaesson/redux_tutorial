'use strict'

import {combineReducers} from 'redux';

// import reducers to be combined
import {booksReducers} from './booksReducers'
import {cartReducers} from './cartReducers'



// export
export default combineReducers({
	books: booksReducers,
	cart: cartReducers
})