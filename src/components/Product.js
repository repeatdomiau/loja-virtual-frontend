import React from 'react';

const Product = ({ product, addToCart }) => {

    return (
        <div className='product'>
            <div className="image-placeholder"><img src={`/images/${product.image}`} alt={product.name} /></div>
            <p>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <button onClick={product.addToCart}>Adicionar ao Carrinho</button>
        </div>
    )

}

export default Product;