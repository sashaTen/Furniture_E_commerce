

import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: "fuck"}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
   logIN(state){
    state.value =  true
   },
   logOUT(state){
    state.value =   false
   },
  },
})

export const {logIN ,  logOUT } = loginSlice.actions
export default loginSlice.reducer
