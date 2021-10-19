import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount } = basketSlice.actions;
export default basketSlice;