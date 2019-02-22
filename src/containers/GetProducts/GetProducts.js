import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getIngredients} from "../../store/actions/action-type";
import './GetProducts.css';
import {addCard, removeCard} from "../../store/actions/card-action";

class GetProducts extends Component {

    componentDidMount(){
        this.props.getProducts()
    }

    render() {
        console.log(this.props.ingredients);
        return (
          <Fragment>
              <div className="ProductsBlock">
              {
                  Object.keys(this.props.ingredients).map((products, index) => {
                      console.log(products);
                      return (
                          <div key={index} className="ProductsItem prodItems">
                              <div className="imgBlock">
                                  <img className="img" src={this.props.ingredients[products].image} alt=""/>
                              </div>
                              <hr/>
                              <div className="productsTextBlock prodItems">
                                  <h2 className="GetProductName">{this.props.ingredients[products].name}</h2>
                                  <p>KGS: {this.props.ingredients[products].cost}</p>
                              </div>
                              <hr/>
                              <div className="ButtonBlock">
                                  <button onClick={() => this.props.cardAdd(products, this.props.ingredients[products].cost)}>Add to card</button>
                              </div>
                          </div>
                      );
                  })
              }
          </div>
          </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.getProductsReducer.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getIngredients()),
        cardAdd: (prodName, price) => dispatch(addCard(prodName, price)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetProducts);