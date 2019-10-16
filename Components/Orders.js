import React from 'react';
import { Link } from 'react-router-dom';

//import components
import OrderItem from './OrderItem';

//import scss
import '../scss/orders.scss';

class Orders extends React.Component{

	
	
	render(){
		
		let orderContent;
		const {orders, updateOrders, removeOrder} = this.props;
		
		const total = this.props.orders.reduce((prevTotal,order) => {
			prevTotal = prevTotal + (order.quantity * order.price);
			return prevTotal;
		}, 0 );
		const totalQuantity = this.props.orders.reduce((prevQuantity, order) => {
			prevQuantity = prevQuantity + order.quantity;
			return prevQuantity;
		}, 0);
		const totalDiscount = this.props.orders.reduce((prevDiscount, order) => {
			prevDiscount = prevDiscount + (order.quantity * ((order.price)*(order.discount/100)));
			return prevDiscount;
		}, 0);
		
		if(orders.length){
			orderContent = orders.map((order, index) => {
				return(
					<OrderItem order={order} key={index} updateOrders={updateOrders} removeOrder={removeOrder}/>

				)
			})
		}
		
		return(
			<div className="orders">
				<header>
					<hr></hr>
					<div>
            <Link to="/">
						  <span className="go-back"> &#60; </span>
            </Link>
						<span className="order-heading">Order Summary</span>
					</div>
					<hr></hr>
				</header>
				<div className="order-summary">
					<div className="Table">
			
						<div className="Heading">
							<div className="Cell name">
								<p>Items</p>
							</div>
							<div className="Cell qty">
								<p>Qty</p>
							</div>
							<div className="Cell price">
								<p>Price</p>
							</div>
						</div>
							{orderContent}
			
					</div>
				</div>
				<div className="order-total">
          <div className="Table">
            <div className="title">
              Total
            </div>
            <div className="Row">
              <div className="Cell">Items({totalQuantity})</div>
              <div className="Cell">:</div>
              <div className="Cell">${total}</div>
            </div>
            <div className="Row">
              <div className="Cell">Discount</div>
              <div className="Cell">:</div>
              <div className="Cell">-${totalDiscount}</div>
            </div>
            <div className="Row">
              <div className="Cell">Type Discount</div>
              <div className="Cell">:</div>
              <div className="Cell">-$0</div>
            </div>
            <div className="Row">
              <div className="Cell">Order Total</div>
              <div className="Cell">:</div>
              <div className="Cell">${total - totalDiscount}</div>
            </div>
          </div>
					
				</div>
        <div style={{clear: "both"}}></div>
			</div>
		)
	}
}

export default Orders;