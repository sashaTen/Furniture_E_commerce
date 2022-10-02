import     {useSelector    }   from     "react-redux" 
/*
here   is the  plan   :
show  charactersitics   of the arr  cartItems
but diplay   set    

*/ 
const     ShoppingCart=()=>{
    const  cartItems   = useSelector((state)=>  state.cartREDUCER)
    console.log(cartItems.value);

    
  const  itemsAMOUNT=(id)=>{
       let   amount   = 1
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
                        <h2>+</h2>
                        <h1>{itemsAMOUNT(item.id)}</h1>
                        <h2>-</h2>
                     </div>

            </div>)
           })}
    </div>
    </>)
}


export   default   ShoppingCart