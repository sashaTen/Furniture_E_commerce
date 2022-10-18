import   {combineReducers}  from   "redux"
import    cartSlice  from    "./sliceFORcart"
import { configureStore } from '@reduxjs/toolkit'
import   loginSlice  from   "./slice"

const    rootReducer   =  combineReducers({
    loginREDUCER   :  loginSlice,
    cartREDUCER :    cartSlice
})
export   default  configureStore({
    reducer :  rootReducer,
})

