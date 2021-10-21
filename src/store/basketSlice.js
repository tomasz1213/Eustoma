import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    value:0,
    cart:[],
    totalPrize:0
  },
  reducers: {
    addProduct(state,action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(el => el.key === action.payload.key);
      if(!existingItem){
        state.cart.push(newItem);
        state.value++
        state.cart.length > 0 ? state.cart.length > 1 ? state.totalPrize =+ state.cart.reduce((prev, curr) => (prev.prize * prev.productAmount) + (curr.prize * curr.productAmount)) : 
        state.totalPrize = state.cart[0].prize * state.cart[0].productAmount: state.totalPrize = 0;
      }else{
        existingItem.productAmount = action.payload.productAmount;
        state.cart.length > 0 ? state.cart.length > 1 ? state.totalPrize =+ state.cart.reduce((prev, curr) => (prev.prize * prev.productAmount) + (curr.prize * curr.productAmount)) : 
        state.totalPrize = state.cart[0].prize * state.cart[0].productAmount: state.totalPrize = 0;
      }
    },
    removeProduct(state,action) {
      state.cart = state.cart.filter(el => el.key !== action.payload);
      state.cart.length > 0 ? state.cart.length > 1 ? state.totalPrize =+ state.cart.reduce((prev, curr) => (prev.prize * prev.productAmount) + (curr.prize * curr.productAmount)) : 
      state.totalPrize = state.cart[0].prize * state.cart[0].productAmount: state.totalPrize = 0;
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
});

export const { addProduct, removeProduct, incrementByAmount } = basketSlice.actions;
export default basketSlice;