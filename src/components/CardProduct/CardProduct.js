import React, {Component} from 'react';
import {connect} from "react-redux";
import './CardProduct.css';
import {removeCard} from "../../store/actions/card-action";

class CardProduct extends Component {
    render() {
        return (
            <div className="CardBlock">

                {
                    Object.keys(this.props.cardProducts).map((prod, index) => {
                        console.log(this.props.cardProducts);
                        return (
                            <div key={index} className="ProductCardInfo">
                                <h2 className="ProductName">{prod}</h2>
                                <p className="ProductPrice">{'x' + this.props.cardProducts[prod]}</p>
                                <button onClick={() => this.props.cardRemove(prod)} className="btnProduct">x</button>
                            </div>
                        )
                    })
                }
                <hr/>
                <p><strong>Total price: </strong>{this.props.cardProductsPrice}</p>
                <p><strong>Delivery: </strong>{this.props.deliveryPrice} KGS</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      cardProducts: state.cardProductsReducer.productsCard,
      cardProductsPrice: state.cardProductsReducer.totalPrice,
      deliveryPrice: state.cardProductsReducer.delivery,
      ingredients: state.getProductsReducer.products

  }
};
const mapDispatchToProps = dispatch => {
    return {
        cardRemove: (prodName, price) => dispatch(removeCard(prodName, price)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);