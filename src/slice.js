

import { createSlice } from '@reduxjs/toolkit'




//const initialState = { value: "logout"}

const loginSlice = createSlice({
  name: 'login',
  initialState :{ value: "logogut"},
  reducers: {
   consoleLOG(){
    console.log("you   dispatch");
   },
   logIN(state){
    state.value+="in"
   },
   logOUT(state){
    state.value ="logout"
   },
  },
})

export const {logIN ,  logOUT  ,    consoleLOG} = loginSlice.actions
export default loginSlice.reducer

