import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push(state, action) {
      state.value.push(action.payload);
    },
   deleteITEM(state ,  action){
    let   pseudoList   =    state.value;
    state.value =  []
    for(let i=0 ; i <    pseudoList.length ;  i++){
      if(pseudoList[i].id!==action.payload){
            state.value.push(pseudoList[i])
      }
    }
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

export const { push, decrement, incrementByAmount ,  clear,   just , deleteITEM } = cartSlice.actions;
export default cartSlice.reducer;
