import React from 'react'
import {Col, Row, Well, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addToCart, updateCart} from '../../actions/cartActions';

class BookItem extends React.Component{
	
	handleCart(){
		const book = [{
			id:this.props.id,
			title:this.props.title,
			description:this.props.description,
			price:this.props.price,
			quantity:1
		}]
		if(this.props.cart.length > 0){
			let id = this.props.id;
			let cartIndex = this.props.cart.findIndex((cart)=>{
				return cart.id === id;
			})
			if (cartIndex === -1){
				this.props.addToCart(book); 	
			}else{
				this.props.updateCart(id, 1)
			}
			
		}else{
			this.props.addToCart(book); 	
		}

	}


	render(){
		return(
			<Well>
				<Row>
					<Col xs={12}>
						<h6>{this.props.title}</h6>
						<p>{this.props.description}</p>
						<h6>usd. {this.props.price}</h6>
						<Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy Now</Button> 
					</Col>
				</Row>
			</Well>
			)
	}
}
function mapStateToProps(state){
	return{
		cart:state.cart.cart
	} 
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({
		addToCart:addToCart,
		updateCart:updateCart
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BookItem);