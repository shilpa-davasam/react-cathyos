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
    const {props: {items, updateOrders, addedItem} } = this;
	let newItem;
	if(addedItem){
		newItem = `${addedItem} added to cart`;
	}
    return(
      <div className="add-to-cart">
        <header>
          <hr></hr>
          <div className="header-div">
            <span className="all-items">All Items</span>
            <span className="item-added">{newItem}</span>
			<Link to="/orders" >
				<button disabled={this.disabledGo()} className="go-to-cart">Go To Cart</button>
			</Link>
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