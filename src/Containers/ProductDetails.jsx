import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProduct, selectedProduct } from '../Redux/Actions/product';

const ProductDetails = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();

    let product = useSelector((state) => state.product);
    const { image, title, price, category, description } = product;

    useEffect(() => {
        if (productId && productId !== "") {
            dispatch(selectedProduct(productId));
        }

        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId]);

    return (
        <div>
            {Object.keys(product).length === 0 ? (
                <div className='loading'>Loading</div>
            ) : (
                <div className="productContainer">
                    <div className="body">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <h1>{title}</h1>
                            <h2>$ {price}</h2>
                            <h3>{category}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails