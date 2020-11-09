import React from 'react';

const Cart = ({ products = [], open, changeQuantity }) => {

    const render = (isOpen) => {
        if (isOpen) return (
            <div className='cart'>
                {
                    products.length === 0 ? <p className='empty-cart'>Nenhum item no carrinho...</p> :
                        (
                            <ul className='cart-list'>
                                {
                                    products.map(product => (
                                        <li>
                                            <div className="image-placeholder"><img src={`/images/${product.image}`} alt={product.name} /></div>
                                            <p>{product.name}</p>
                                            <p>{(product.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                                            <input type='number' value={product.qtd} onChange={changeQuantity(product.id)} />
                                        </li>
                                    ))
                                }
                                <li className="total">
                                    Total: {
                                        products.reduce((acc, p) => acc + p.qtd * p.price, 0)
                                            .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                                    }
                                </li>
                            </ul>
                        )
                }
            </div>
        )
        return null;
    }

    return render(open);

}

export default Cart;