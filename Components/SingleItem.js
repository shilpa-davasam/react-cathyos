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

  }

  render(){
    const {discount, id, img_url, name, price, type}  = this.props.item;
    
    return(
      <div className="item">
          <span className="discount">{discount}% off</span>
          <div className="image">
            <img src={img_url} alt="Book Cover Not Available"/>
          </div>
          <div className="details">
              <span className="name">{name}</span>
              <span><strike>${price}</strike>${this.state.sellingPrice}</span>
              <button onClick={this.onAddToCart}>Add To Cart</button>
          </div>
      </div>
    )
  }
}

export default SingleItem;