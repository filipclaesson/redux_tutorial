"use strict"
import React from 'react'
import {Modal, Well,Panel, Row, Column,Col,Label, Button, ButtonGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteCartItem, updateCart} from '../../actions/cartActions'

class Cart extends React.Component {
	onDelete(id){
		const currentCart = this.props.cart;
		const indexToDelete = currentCart.findIndex(
			function(cart){
				return cart.id === id;
			})
		cartAfterDelete = [] 
		let cartAfterDelete = [...currentCart.slice(0,indexToDelete),
			...currentCart.slice(indexToDelete + 1)]
		this.props.deleteCartItem(cartAfterDelete)
	}
	onIncrement(id){
		this.props.updateCart(id, 1);
	}
	onDecrement(id, quantity){
		if(quantity == 1){
			this.onDelete(id)
		}else{
			this.props.updateCart(id, -1);		
		}
	}
	render(){
		if (this.props.cart[0]){
			return(this.renderCart());
		}else{
			return(this.renderEmpty());
		}
	}
	renderEmpty(){
		return(<div></div>);
	}

	constructor(){
		super();
		this.state = {
			showModel:false
		}
	}
	show(){
		this.setState({showModal:true})
	}
	handleClose(){
		this.setState({showModal:false})
	}
	renderCart(){
		var cartItemsList = this.props.cart.map(function(cartArray){
			return(<Panel key={cartArray.id}>
					<Row>
						<Col xs={12} sm={4}>
							<h6>{cartArray.title}</h6>
						</Col>
						<Col xs={12} sm={2}>
							<h6>usd. {cartArray.price}</h6>
						</Col>
						<Col xs={12} sm={2}>
							<h6>qty. {cartArray.quantity}<Label bsStyle="success"></Label></h6>
						</Col>
						<Col xs={6} sm={4}>
							<ButtonGroup style={{minWidth:'300px'}}>
								<Button onClick={this.onDecrement.bind(this, cartArray.id, cartArray.quantity)} bsStyle="default" bsSize="small">-</Button>
								<Button onClick={this.onIncrement.bind(this, cartArray.id)} bsStyle="default" bsSize="small">+</Button>
								<span>    </span>
								<Button onClick={this.onDelete.bind(this, cartArray.id)} bsStyle="danger" bsSize="small">DELETE</Button>	
							</ButtonGroup>
						</Col>

					</Row>
				</Panel>)
		}, this)
		return(
			<Panel header="Cart" bsStyle="primary">
				{cartItemsList}
				<Row>
					<Col>
						<h6> Total Amount: </h6>
						<Button onClick={this.show.bind(this)} bsStyle="success" bsSize="small">
							Proceed To Checkout
						</Button>
					</Col>
				</Row>
				<Modal show={this.state.showModal} onHide={this.handleClose.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Thank You!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<h6> hej</h6>
					</Modal.Body>
						<Modal.Footer>
						<Col xs={6}> 
						</Col>
						<Button onClick={this.handleClose.bind(this)}>Close</Button>
					</Modal.Footer>
				</Modal>
			</Panel>
		)
	}
}
function mapStateToProps(state){
	return {
		cart: state.cart.cart
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		deleteCartItem:deleteCartItem,
		updateCart:updateCart
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

