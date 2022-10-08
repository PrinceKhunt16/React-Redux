import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../Redux/Actions/product';
import Products from './Products';

const ProductListing = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <div className="ui grid container">
            <Products />
        </div>
    )
}

export default ProductListing