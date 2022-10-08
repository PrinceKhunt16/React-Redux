import * as actions from "../Constants/product"

const initialProducts = {
    products: []
}

export const productsReducer = (state = initialProducts, action) => {
    switch (action.type) {
        case actions.SET_PRODUCT:
            return {
                ...state,
                products: action.payload
            };
        case actions.FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.SELECTED_PRODUCT:
            return {
                ...state,
                ...action.payload
            };
        case actions.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}