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
   minusITEM(state ,  action){
   const index = state.value.map(object => object.id).indexOf(action.payload);
   state.value.splice(index, 1)
   },

    clear(state){
      state.value=[]
    },
    
  
   
  
  }
});

export const { push, decrement, incrementByAmount ,  clear,   just , deleteITEM  ,  minusITEM} = cartSlice.actions;
export default cartSlice.reducer;
