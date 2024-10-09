import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    const {name,image,cost} = action.payload;
    const existingItem=state.items.find(item =>item.name === name);
    if(existingItem){                  
      existingItem.quantity+= 1;           
    }
    else{
      state.items.push({name, image, cost, quantity: 1});
    } },

    decrementItem:(state,action) => {
      const {name,quantity} =action.payload;
      const existingItem =state.items.find(item=> item.name ==name);
      if(existingItem){
        existingItem.quantity -=1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); ///names of pllants that are not equal to the the plant that has to be removed willbe kept in the items array and if it is equal it will be skipped/removed not saved. 
      /*const{name} = action.payload;
      const existingItem = state.items.find(item=> item.name ===name);
      if(existingItem){
        existingItem.quantity--;
      }
      else{
        console.log('Plant has been removed already');
      }
      */
    },  
    updateQuantity: (state, action) => {
    const {name,quantity} = action.payload;
    const existingItem=state.items.find(item => item.name === name);  
      if(existingItem && quantity >=0){
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, decrementItem } = CartSlice.actions;

export default CartSlice.reducer;
