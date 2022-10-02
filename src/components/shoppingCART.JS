import     {useSelector   ,    useDispatch  }   from     "react-redux" 
import { push } from "../sliceFORcart";
const     ShoppingCart=()=>{
    const  cartItems   = useSelector((state)=>  state.cartREDUCER)
    const    dispatch     =   useDispatch()
   
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
            return (<div  className="SINGLEcartITEMcontainer"  key  =  {item.id}>
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
    </div>
    </>)
}


export   default   ShoppingCart