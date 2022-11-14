/*/
here   i will    implment  the  dark   mode   
so this   is   the   slice  for   it 
1   class  css    black   backgrpund   and  white   color 
2   check   if  it   works with   class "App   darkMODE"
3   add  it  redux 
         *add  to   app    class  
4   add SWITCH to   component   of  header 
5    delete     opcacity    background  from    the  items 
*/
import { createSlice } from "@reduxjs/toolkit";
const initialState = { value: "App darkMODE" };
const darkModeSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
     switchMODE(state){
         state.value="App darkMODE"
     }
      
    
     
    
    }
  });
  export   const  {switchMODE} = darkModeSlice.actions
  export   default   darkModeSlice.reducer
