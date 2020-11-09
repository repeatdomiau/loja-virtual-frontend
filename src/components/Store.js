import React from 'react';
import Product from './Product';

const Store = ({ products, addToCart }) => {

    return (
        <div className='store'>
            {
                products.map(product =>
                    <Product key={product.id} product={product} />
                )
            }
        </div>
    )

}

export default Store;