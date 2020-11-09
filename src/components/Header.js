import React from 'react';
import { FaDev, FaShoppingBasket } from 'react-icons/fa';
import Badge from './Badge';

const Header = ({ cart = 0, showCart, isOpen }) => {

    return (
        <div className='header'>
            <div className='brand'>
                <FaDev size={30} color={'white'} />
                <span>Store</span>
            </div>
            <div className='cart-icon-placeholder' onClick={showCart} style={{ borderLeft: isOpen ? '1px solid white' : 'none' }}>
                <FaShoppingBasket className='cart-icon' size={30} color={'white'} />
                {cart > 0 && <Badge value={cart} />}
            </div>
        </div >
    )

}

export default Header;