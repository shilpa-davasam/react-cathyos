import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

//import components
import AddToCart from './Components/AddToCart';

import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
      error: "",
      orders: []
    };
  }

  componentDidMount(){
      axios.get("https://api.myjson.com/bins/qhnfp")
        .then(res => this.setState({items : res.data, isLoaded: true}))
        .catch(err => this.setState({isLoaded: true, error: err}));
  }

  //update orders in cart 
  updateOrders = (obj) => {
    const orders = [...this.state.orders];
    const order = orders.find(order => order.id === obj.id);
    if(order){
      order.quantity = order.quantity++;
    }
    else{
      orders.push(obj);
    }
    this.setState({orders});
    console.log(this.state.orders);
  }

  render() {
    const { state: {items, isLoaded, error, orders}, updateOrders} = this;
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else if(error){
      return <div>{error}</div>;
    }
    else{
      return (
            <React.Fragment>
              <AddToCart items={items} updateOrders={updateOrders}/>
            </React.Fragment>
          );
    }
   
  }
}

render(<App />, document.getElementById('root'));
