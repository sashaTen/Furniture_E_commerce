import   {combineReducers}  from   "redux"
import    cartSlice  from    "./sliceFORcart"
import { configureStore } from '@reduxjs/toolkit'
import   loginSlice  from   "./slice"
import   darkModeSlice  from   "./darkModeSlice"

const    rootReducer   =  combineReducers({
    loginREDUCER   :  loginSlice,
    cartREDUCER :    cartSlice,
    darkModeREDUCER : darkModeSlice
})
export   default  configureStore({
    reducer :  rootReducer,
})

