'use strict'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// REACT ROUTER
import {Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router'

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
// import combined reducers
import reducers from './reducers/index';

// import actions
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';


const middleware = applyMiddleware(thunk,logger);
// STEP 1 Create a store and subscribe for any changes
const store = createStore(reducers, middleware);

import BooksList from './components/pages/bookslist';
import Cart from './components/pages/cart'
import BooksForm from './components/pages/booksForm'
import Main from './main'

const Routes = (
	<Provider store={store}>
		<div>
			<Router history={browserHistory}>
				<Route path="/" component={Main}>
					<IndexRoute component={BooksList}/>
					<Route path="/admin" component={BooksForm}/>
					<Route path="/cart" component={Cart}/>
				</Route>
			</Router>
		</div>
	</Provider>
)
render(
	Routes, document.getElementById('app')
);


// CREATE ACTION
// store.dispatch(postBooks([{
// 		id: 1,
// 		title:'this is the book title',
// 		description: 'this is the book description',
// 		price: 11.33
// 	},{
// 		id: 2,
// 		title:'this is the second book title',
// 		description: 'this is the second book description',
// 		price: 22.33
// 	}])
// )
// DELETE ACTION
// store.dispatch(deleteBooks({id: 1}));

// // UPDATE ACTION
// store.dispatch(updateBooks({
// 		id: 2,
// 		title: "new updated title"
// 	}
// ))

// // ADD TO CART
// store.dispatch(addToCart([{id: 1}]))
