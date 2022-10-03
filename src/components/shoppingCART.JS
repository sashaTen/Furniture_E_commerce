import { BsTrash } from "react-icons/bs"
import     {useSelector   ,    useDispatch  }   from     "react-redux" 
import { push ,clear  ,  deleteITEM  ,  minusITEM } from "../sliceFORcart";
const     ShoppingCart=()=>{
    const  cartItems   = useSelector((state)=>  state.cartREDUCER)
    const    dispatch     =   useDispatch()
    let   arrOfItemsId =    [] 
    let   arrOfItemsIdSET  
    let   arrOfItemsOBJECTS =  []
    for(let i   =0 ;  i  <   cartItems.value.length ;  i++){
      arrOfItemsId.push(cartItems.value[i].id)
    }
    arrOfItemsIdSET =   new  Set(arrOfItemsId)    
    let   arrOfItemsIdfromSet =    Array.from(arrOfItemsIdSET)
   for(let  i  =   0 ;  i  <arrOfItemsIdfromSet.length  ;  i  ++){
    arrOfItemsOBJECTS.push(returnOBJECT(arrOfItemsIdfromSet[i]))
   }
  
  const   randomNUMBER=()=>{
    let value1 = Math.random()
    let value2 = Math.random()
    let value3 = Math.random()
   return value1 + value2+   value3
  }
  
 

  const  itemsAMOUNT=(id)=>{
       let   amount   = 0
      for (let i =0 ;   i  <     cartItems.value.length    ;    i ++){
        if (cartItems.value[i].id===id){
          amount++;
        }
      }
      return amount
  } 


  function   returnOBJECT(id){
    for(let i =0 ;   i< cartItems.value.length ;  i ++){
      if(id===cartItems.value[i].id){
        return    cartItems.value[i]
      }
    }
  }
 
    return (<>
    <div   className="shoppingCART">
        
           { arrOfItemsOBJECTS.map((item)=>{
            return (<div  className="SINGLEcartITEMcontainer"  key  =  {item.id+   randomNUMBER()}>
                     <p className="itemNAME">{item.name}</p>
                     <p>{item.price/1000}$</p>
                     <img  src={item.image}/>
                     <div  className="itemsAMOUNTcontrolCONTAINER">
                        <h2 
                         onClick={() => {
       
            dispatch(push(item));
            
          }}
                         >+</h2>
                        <h1>{itemsAMOUNT(item.id)}</h1>
                        <h2
                        onClick={()=>{
                          dispatch(minusITEM(item.id))
                        }}
                        >-</h2>
                     </div>
                     <BsTrash 
                        onClick={()=>{
                          dispatch(deleteITEM(item.id))
                        }}
                      className="itemsAMOUNTcontrolCONTAINER  BsTrash"></BsTrash>

            </div>)
           })}
           <button   className=  "clearBTN" onClick =  {
              ()=>{
                dispatch(clear())
              }
             }>   clear   list</button> 
    </div>
    </>)
}


export   default   ShoppingCart