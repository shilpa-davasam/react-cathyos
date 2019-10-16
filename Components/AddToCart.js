import React from 'react';
import { Link } from 'react-router-dom';

//import components
import SingleItem from './SingleItem';

//import .scss 
import '../scss/addToCart.scss';

class AddToCart extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.resetAddedItem();
    console.log(this.props.items);
  }
  //function to disable Go to cart till something added in cart
  disabledGo = () => {
	  if(this.props.orders.length){
		  return false;
	  }
	  else{
		  return true;
	  }
  }
  
  
  render(){
    const {props: {items, updateOrders, addedItem, orders} } = this;
	  let newItem;
	  if(addedItem){
		  //newItem = `${addedItem} added to cart`;
      newItem = <span className="item-added btn">{addedItem} is added to cart</span>
  	}

    const totalQuantity = this.props.orders.reduce((prevQuantity, order) => {
			prevQuantity = prevQuantity + order.quantity;
			return prevQuantity;
		}, 0);

    return(
      <div className="add-to-cart">
        <header>
          <hr></hr>
          <div className="header-div">
            <span className="all-items">All Items</span>
            {newItem}
			      <Link to="/orders" >
                  <button disabled={this.disabledGo()} className="go-to-cart btn">Go To Cart</button>
       
			      </Link>
            <span className="total-quantity">{totalQuantity}</span>
          </div>
          <hr></hr>
        </header>
        <div className="items">
          { items.map((item, index) => <SingleItem key={index} item={item} updateOrders={updateOrders}></SingleItem> )}
        </div>
      
      </div>
    )
  }

}

export default AddToCart;