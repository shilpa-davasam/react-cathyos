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
      order: []
    };
  }

  componentDidMount(){
      axios.get("https://api.myjson.com/bins/qhnfp")
        .then(res => this.setState({items : res.data, isLoaded: true}))
        .catch(err => this.setState({isLoaded: true, error: err}));
  }

  render() {
    const { state: {items, isLoaded, error}} = this;
    if(!isLoaded){
      return <div>Loading...</div>;
    }
    else if(error){
      return <div>{error}</div>;
    }
    else{
      return (
            <React.Fragment>
              <AddToCart items={items}/>
            </React.Fragment>
          );
    }
   
  }
}

render(<App />, document.getElementById('root'));
