import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import axios from 'axios';

//import components
import AddToCart from './Components/AddToCart';
import Orders from './Components/Orders';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
      error: "",
      orders: [],
	  addedItem: ""
    };
  }

  componentDidMount(){
      axios.get("https://api.myjson.com/bins/qhnfp")
        .then(res => this.setState({items : res.data, isLoaded: true}))
        .catch(err => this.setState({isLoaded: true, error: err}));
  }

  //update orders in cart 
  updateOrders = (obj, op="add") => {
    const orders = [...this.state.orders];
    const order = orders.find(order => order.id === obj.id);
    if(order){
		switch(op){
			case "add": order.quantity = order.quantity + 1;
				break;
			case "sub" : 
				if(order.quantity > 1){
					order.quantity = order.quantity - 1;
				}
					
				break;
		}
    }
    else{
      orders.push(obj);
    }
    this.setState({orders, addedItem: obj.name});
    console.log(this.state.orders);
  }
  removeOrder = (obj) => {
	  const orders = [...this.state.orders];
	  const index = orders.findIndex(order => order.id === obj.id);
	  orders.splice(index, 1);
	  this.setState({orders});
  }

  render() {
    const { state: {items, isLoaded, error, orders, addedItem}, updateOrders, removeOrder} = this;
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else if(error){
      return <div>{error}</div>;
    }
    else{
      return (
		<Router>
			<Switch>
				<Route exact path="/" render={() =>  <AddToCart items={items} updateOrders={updateOrders} addedItem={addedItem} orders={orders}/>}/>
				<Route path="/orders" render={() => <Orders orders={orders} updateOrders={updateOrders} 
						removeOrder={removeOrder}/>} />
			</Switch>
		</Router>
            
          );
    }
   
  }
}

render(<App />, document.getElementById('root'));
