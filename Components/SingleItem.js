import React from 'react';

class SingleItem extends React.Component{
  state = {
    sellingPrice: 0
  }

  componentDidMount(){
    const {discount, id, img_url, name, price, type}  = this.props.item;
    const discountPrice = (price)*(discount/100);
    this.setState({sellingPrice: (price - discountPrice)});
  }

  onAddToCart = (e) => {
      const {sellingPrice} = this.state;
      const obj = {...this.props.item, sellingPrice, quantity: 1};
      this.props.updateOrders(obj, "add");
  }

  render(){
    const {discount, id, img_url, name, price, type}  = this.props.item;
    let itemDiscount, strikePrice;
	if(discount > 0){
		itemDiscount = <span className="discount">{discount}% off</span>;
		strikePrice = <strike><span>${price}</span></strike>;
	}
	else {
		itemDiscount = <span className="discount"></span>
		strikePrice = null;
	}
    return(
      <div className="item">
			    {itemDiscount}
          <div className="image">
            <img src={img_url} alt="Book Cover Not Available"/>
          </div>
          <div className="details">
              <span className="name">{name}</span>
              {strikePrice}
              <span className="price"> ${this.state.sellingPrice}</span>
              <button onClick={this.onAddToCart} className="btn add">Add To Cart</button>
          </div>
      </div>
    )
  }
}

export default SingleItem;