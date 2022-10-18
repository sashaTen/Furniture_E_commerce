

import { createSlice } from '@reduxjs/toolkit'




//const initialState = { value: "logout"}

const loginSlice = createSlice({
  name: 'login',
  initialState :{ value: "mr "},
  reducers: {
  
   logIN(state,  action){
    state.value=action.payload
    localStorage.setItem("name",  state.value);
   },
   logOUT(state){
    state.value ="logout"
   },
 
  },
})

export const {logIN ,  logOUT  } = loginSlice.actions
export default loginSlice.reducer

