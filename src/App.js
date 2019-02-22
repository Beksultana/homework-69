import React, { Component } from 'react';
import GetProducts from "./containers/GetProducts/GetProducts";
import CardProduct from "./components/CardProduct/CardProduct";

class App extends Component {
  render() {
    return (
      <div className="Containers">
          <GetProducts/>
          <CardProduct/>
      </div>
    );
  }
}

export default App;
