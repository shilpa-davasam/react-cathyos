import React from "react";

class OrderItem extends React.Component {
  decreaseQuantity = e => {
    const {order} = this.props;
    if(order.quantity > 1){
      this.props.updateOrders(order, "sub");
    }
    else if(order.quantity == 1){
      this.props.removeOrder(order);
    }
    
  };

  increaseQuantity = e => {
    this.props.updateOrders(this.props.order, "add");
  };

  deleteOrder = e => {
    this.props.removeOrder(this.props.order);
  };

  render() {
    const { order } = this.props;
    return (
      <React.Fragment>
        <div className="Row">
          <div className="Cell item name">
            <div className="item-image">
              <img src={order.img_url} alt="Book Cover Not Available" />
            </div>
            <span className="item-name">{order.name}</span>
            <span className="item-remove" onClick={this.deleteOrder}>
              x
            </span>
          </div>
          <div className="Cell add-remove-item qty">
            <button onClick={this.decreaseQuantity}> - </button>
            <span>{order.quantity}</span>
            <button onClick={this.increaseQuantity}> + </button>
          </div>
          <div className="Cell item-price price">
            <p>${order.quantity * order.price}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default OrderItem;
