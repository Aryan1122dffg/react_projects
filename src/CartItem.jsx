// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addItem,removeItem, updateQuantity,decrementItem } from './CartSlice';
// import './CartItem.css';
// // import { useNavigate } from 'react-router-dom'; 



// const CartItem = ({ onContinueShopping }) => {
//   const cart = useSelector(state => state.cart.items);
//   console.log(cart);
//   const dispatch = useDispatch();
//   const [showplants , setShowPlants] = useState(false);
//   // const navigate = useNavigate();

//   //const cartitems = useSelector((state) => state.cart);

//   // Calculate total amount for all products in the cart
//   const calculateTotalAmount = () => {
//     let total_amount = 0;
//     for (let index = 0; index < cart.length; index++) {
//       const item = cart[index];
//       // Ensure quantity and cost are numbers before calculating
//       const quantity = item.quantity || 0;
//       const cost = item.cost || 0;
    
//       if (typeof quantity === 'number' && typeof cost === 'number') {
//         total_amount += quantity * cost;
//       }
//     }
//     return total_amount;
//   };
  


//     /* const amount = updateQuantity * cart.cost;
//     return amount;*/


//   const handleContinueShopping = (e) => {
//     // navigate('/products')

//   };

//   const handleIncrement = (item) => {
//     dispatch(addItem(item));

//     // dispatch( updateQuantity(item.quantity+1));
//     /*item.quantity += 1;
//     dispatch(updateQuantity(item));
//   */
//  };

//   const handleDecrement = (item) => {
//     if(item.quantity){
//       dispatch(decrementItem(item));
//     }
//     else{dispatch(removeItem(item.name));
//     }
       
 
//     /*if(item.quantity === 0){
//       dispatch(removeItem(item));
//     }
//     else{
//       item.quantity -=1;
//     dispatch(updateQuantity(item));
//   }*/

// };

//   const handleRemove = (item) => {
//     dispatch(removeItem(item.name))
//   };

//   // Calculate total cost based on quantity for an item
//   const calculateTotalCost = (item) => {   
//     let total_cost = 0;
//     total_cost=item.quantity * item.cost;
//     return total_cost;
//   };

//   return (
   
//     <div className="cart-container">
//       <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
//       <div>
//         {cart.map(item => (
//           <div className="cart-item" key={item.name}>
//             <img className="cart-item-image" src={item.image} alt={item.name} />
//             <div className="cart-item-details">
//               <div className="cart-item-name">{item.name}</div>
//               <div className="cart-item-cost">{item.cost}</div>
//               <div className="cart-item-quantity">
//                 <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
//                 <span className="cart-item-quantity-value">{item.quantity}</span>
//                 <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
//               </div>
//               <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
//               <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>    
//       <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      
//       <div className="continue_shopping_btn">
//         <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
//         <br />
//         <button className="get-started-button1">Checkout</button>
//       </div>
   
//     </div>
   
//   )
// }


// export default CartItem;


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, decrementItem } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  
  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const quantity = item.quantity || 0;
      const cost = item.cost || 0;
      return total + quantity * cost;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(decrementItem(item));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCost = (item) => {
    const quantity = item.quantity || 0;
    const cost = item.cost || 0;
    return quantity * cost;
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
          <div>
            {cart.map(item => (
              <div className="cart-item" key={item.name}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">${item.cost}</div>
                  <div className="cart-item-quantity">
                    <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                  <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="continue_shopping_btn">
            <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
            <button className="get-started-button1">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;
