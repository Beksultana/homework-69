import axios from 'axios';

const axiosProducts = axios.create({
    baseURL: 'https://products-product.firebaseio.com'
});

export default  axiosProducts;