import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push(state, action) {
      state.value.push(action.payload);
    },
   
    clear(state){
      state.value=[]
    },
    decrement(state) {
      state.value--;
    },
  
    just(){
      console.log("hello    op   just");
      
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    }
  }
});

export const { push, decrement, incrementByAmount ,  clear,   just } = cartSlice.actions;
export default cartSlice.reducer;
