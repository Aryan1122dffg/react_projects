import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import SuperCoins from './Components/SuperCoins'; // Correct path to SuperCoins
import './App.css'; // Assuming you have a stylesheet

const App = () => {
  return (
    <div>
      <h1 className="app-heading">E-Commerce Application</h1>
      <ProductList />
      <ShoppingCart />
      <SuperCoins />
    </div>
  );
};

export default App;
