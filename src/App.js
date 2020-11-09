import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Store from './components/Store';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    fetch('products.json')
      .then(resp => resp.json())
      .then(setProducts)
  }, []);

  const addToCart = productId => () => {
    const onCart = cart.find(x => x.id === productId);
    const restOfCart = cart.filter(x => x.id !== productId);

    if (onCart) {
      const newCart = [{ ...onCart, qtd: onCart.qtd + 1 }, ...restOfCart];
      console.info(newCart);
      setCart(newCart);
    }
    else {
      const item = products.find(x => x.id === productId);
      const newCart = [{ ...item, qtd: 1 }, ...restOfCart];
      console.info(newCart);
      setCart(newCart);
    }
  }

  const changeQuantity = productId => evt => {
    const index = cart.findIndex(p => p.id === productId);
    const quantity = parseInt(evt.target.value);
    cart[index].qtd = quantity;
    setCart([...cart]);
  }

  return (
    <>
      <Header cart={cart.reduce((acc, item) => acc + item.qtd, 0)} showCart={() => setShowCart(!showCart)} isOpen={showCart} />
      <Main>
        <Store products={products.map(p => ({ ...p, addToCart: addToCart(p.id) }))} />
        <Cart open={showCart} products={cart} changeQuantity={changeQuantity} />
      </Main>
      <Footer />
    </>
  );
}

export default App;
