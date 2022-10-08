import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Products = () => {
    const { products } = useSelector((state) => state.products)

    return (
        <>
            {
                products.map((product) => {
                    return (
                        <div className="product" key={product.id}>
                            <div className='body'>
                                <Link to={`/product/${product.id}`}>
                                    <div className="ui link cards">
                                        <div className="card">
                                            <div className="image">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="content">
                                                <div className="header">{product.title.substring(0, 20)}</div>
                                                <div className="meta price">$ {product.price}</div>
                                                <div className="meta">{product.category}</div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Products
