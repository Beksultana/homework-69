import React, { Component } from 'react';
import GetProducts from "./containers/GetProducts/GetProducts";

class App extends Component {
  render() {
    return (
      <div className="Containers">
          <GetProducts/>
      </div>
    );
  }
}

export default App;
