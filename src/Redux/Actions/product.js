import fakeStoreApi from "../../Apis/fakeStoreApi";
import * as actions from "../Constants/product"

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreApi.get('/products');

    dispatch({
        type: actions.FETCH_PRODUCTS,
        payload: response.data
    });
}

export const setProducts = (products) => {
    return {
        type: actions.SET_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (id) => async (dispatch) => {
    const response = await fakeStoreApi.get(`/products/${id}`);

    dispatch({
        type: actions.SELECTED_PRODUCT,
        payload: response.data
    });
}

export const removeSelectedProduct = () => {
    return {
        type: actions.REMOVE_SELECTED_PRODUCT,
    };
}