import {PRODUCTS_SUCCESS} from "../actions/action-type";

const initialState = {
    products: {}
};

const getProductsReducer = (state = initialState, action) => {
        switch (action.type){
            case PRODUCTS_SUCCESS: {
               return {
                   ...state,
                   products: action.products
               }
            }
            default:
                return state;
        }
};

export default getProductsReducer;