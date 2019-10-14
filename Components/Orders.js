import React from 'react';

//import scss
import '../scss/orders.scss';

class Orders extends React.Component{
	
	
	render(){
		
		let orderContent;
		const {orders} = this.props;
		if(orders.length){
			orderContent = orders.map((order, index) => {
				return(
					<tr key={index}>
						<td>{order.name}</td>
						<td>{order.quantity}</td>
						<td>{order.quantity * order.price}</td>
					</tr>
				)
			})
		}
		
		return(
			<div className="orders">
				<header>
					<hr></hr>
					<div>
						<span className="go-back"> &#60; </span>
						<span className="order-heading">Order Summary</span>
					</div>
					<hr></hr>
				</header>
				<div className="order-summary">
					<table>
						<tbody>
              <hr></hr>
							<tr>
							
								<th>Items</th>
								<th>Qty</th>
								<th>Price</th>
								
							</tr>
              <hr></hr>
							{orderContent}
						</tbody>
					</table>
					
				</div>
				<div className="order-total">
					order total
				</div>
			</div>
		)
	}
}

export default Orders;