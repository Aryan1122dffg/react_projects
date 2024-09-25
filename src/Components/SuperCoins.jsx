import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const SuperCoins = () => {
  const [coins, setCoins] = useState(0);
  const cartItems = useSelector(state => state.cart.cartItems || []);
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (totalAmount >= 100 && totalAmount < 200) {
      setCoins(10);
    } else if (totalAmount >= 200 && totalAmount < 300) {
      setCoins(20);
    } else if (totalAmount >= 300) {
      setCoins(30);
    } else {
      setCoins(0);
    }
  }, [totalAmount]);

  return (
    <div className="super-coins" style={{ textAlign: 'center' }}>
      <h2 className="super-coins-title">Super Coins</h2>
      <p className="super-coins-info">
        You will earn {coins} super coins with this purchase.
      </p>
    </div>
  );
};

export default SuperCoins;
