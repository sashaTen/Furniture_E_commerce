import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push(state, action) {
      state.value.push(action.payload);
    },
    deleteITEM(state  ,    action){
          
    },
    clear(state){
      state.value=[]
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});

export const { push, decrement, incrementByAmount ,  clear } = cartSlice.actions;
export default cartSlice.reducer;
