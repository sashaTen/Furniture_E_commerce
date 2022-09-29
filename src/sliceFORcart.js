import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push(state, action) {
      state.value.push(action.payload);
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});

export const { push, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
