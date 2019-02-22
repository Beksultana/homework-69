import {PRODUCTS_SUCCESS} from "../actions/action-type";

const initialState = {
    products: {}
};

const reducer = (state = initialState, action) => {
        if (action.type === PRODUCTS_SUCCESS){
            return {
                ...state,
                products: action.products
            }
        }
    return state;
};

export default reducer;