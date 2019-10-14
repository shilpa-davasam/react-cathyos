import React from 'react';

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
  render(){
    const {props: {items} } = this;
    return(
      <div className="add-to-cart">
        <header>
          <hr></hr>
          <div>
            <span className="all-items">All Items</span>
            <span className="item-added">Item added to cart</span>
            <span className="go-to-cart">Go To Cart</span>
          </div>
          <hr></hr>
        </header>
        <div className="items">
          { items.map((item, index) => <SingleItem key={index} item={item}></SingleItem> )}
        </div>
      
      </div>
    )
  }

}

export default AddToCart;