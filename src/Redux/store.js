import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { productsReducer, selectedProductsReducer } from "./Reducers/product";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducer = combineReducers({
    products: productsReducer,
    product: selectedProductsReducer
});

const middleware = [thunk];

const store = createStore(
    reducer, 
    {},
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;