import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [] };

const cartSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    push(state, action) {
      state.value.push(action.payload);
      localStorage.clear()
      localStorage.setItem("items", JSON.stringify(state.value));
    },
   deleteITEM(state ,  action){
    let   pseudoList   =    state.value;
    state.value =  []
    for(let i=0 ; i <    pseudoList.length ;  i++){
      if(pseudoList[i].id!==action.payload){
            state.value.push(pseudoList[i])
      }
    }
    localStorage.clear()
    localStorage.setItem("items", JSON.stringify(state.value));
   },
   minusITEM(state ,  action){
   const index = state.value.map(object => object.id).indexOf(action.payload);
   state.value.splice(index, 1)
   localStorage.clear()
   localStorage.setItem("items", JSON.stringify(state.value));
   },

    clear(state){
      state.value=[]
      localStorage.clear()
      localStorage.setItem("items", JSON.stringify(state.value));
    },
   

    getITEMSfromLOCALstorage(state){
         state.value=  JSON.parse(localStorage.getItem("items"));
    }
  
   
  
  }
});

export const { push, decrement, incrementByAmount ,  clear,   just ,
  getITEMSfromLOCALstorage,
   deleteITEM  ,  minusITEM , saveTOlocalSTORAGE} = cartSlice.actions
export default cartSlice.reducer;
