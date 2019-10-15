import React from 'react';
import { Link } from 'react-router-dom';

//import scss
import '../scss/orders.scss';

class Orders extends React.Component{

  decreaseQunatity = (e) => {
    
  }
	
	render(){
		
		let orderContent;
		const {orders} = this.props;
		if(orders.length){
			orderContent = orders.map((order, index) => {
				return(
            <div class="Row" key={index}>
                <div class="Cell">
                    <p>{order.name}</p>
                </div>
                <div class="Cell">
                    <button onClick={this.decreaseQuantity}> - </button>
                    <p>{order.quantity}</p>
                    <button onClick={this.increaseQunatity}> + </button>
                </div>
                <div class="Cell">
                    <p>{order.quantity * order.price}</p>
                </div>
            </div>

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
          <div class="Table">
    
    <div class="Heading">
        <div class="Cell">
            <p>Items</p>
        </div>
        <div class="Cell">
            <p>Qty</p>
        </div>
        <div class="Cell">
            <p>Price</p>
        </div>
    </div>
							{orderContent}
    
</div>
         

					
				</div>
				<div className="order-total">
					order total
				</div>
			</div>
		)
	}
}

export default Orders;