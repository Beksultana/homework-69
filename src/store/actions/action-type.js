import axios from '../../axios-products';

export const PRODUCTS_REQUEST = "INGREDIENT_REQUEST";
export const PRODUCTS_SUCCESS = "INGREDIENT_SUCCESS";
export const PRODUCTS_ERROR = "INGREDIENT_ERROR";

export const productRequest = () => ({type: PRODUCTS_REQUEST});
export const productSuccess = (products) => ({type: PRODUCTS_SUCCESS, products});
export const productError = () => ({type: PRODUCTS_ERROR});

export const getIngredients = () => {
    return dispatch => {
        dispatch(productRequest());

        return axios.get('/products.json').then(products => {
            dispatch(productSuccess(products.data));
        }, error => {
            return productError(error)
        })
    }
};