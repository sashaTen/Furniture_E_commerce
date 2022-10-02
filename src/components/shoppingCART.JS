import     {useSelector   ,    useDispatch  }   from     "react-redux" 
import { push ,clear   } from "../sliceFORcart";
const     ShoppingCart=()=>{
    const  cartItems   = useSelector((state)=>  state.cartREDUCER)
     
     
    const    dispatch     =   useDispatch()
  
     
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
  
    return (<>
    <div   className="shoppingCART">
            
           {cartItems.value.map((item)=>{
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
                        <h2>-</h2>
                     </div>

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