import {CARD_ADD, CARD_REMOVE} from "../actions/card-action";

const INITIAL_PRICE = 0;
const DELIVERY_PRICE = 120;

const initialState = {
    productsCard: {
        hamburger: 0,
        crepes: 0,
        hodDog: 0,
        wrap: 0,
        ribs: 0,
        pizza: 0,
    },
    totalPrice: INITIAL_PRICE,
    delivery: DELIVERY_PRICE,
};

const cardProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CARD_ADD:
            return {
                ...state,
                productsCard: {
                    ...state.productsCard,
                    [action.prodName]: state.productsCard[action.prodName] + 1
                },
                totalPrice: state.totalPrice + parseInt(action.price)
            };
        case CARD_REMOVE:
            return {
                ...state,
                productsCard: {
                    ...state.productsCard,
                    [action.prodName]: state.productsCard[action.prodName] - 1
                },
                totalPrice: state.totalPrice - parseInt(action.price)
            };

        default:
            return state;
    }
};

export default cardProductsReducer;