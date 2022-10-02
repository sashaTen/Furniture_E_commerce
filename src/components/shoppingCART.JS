import     {useSelector    }   from     "react-redux" 
/*
here   is the  plan   :
show  charactersitics   of the arr  cartItems
but diplay   set    

*/ 
const     ShoppingCart=()=>{
    const  cartItems   = useSelector((state)=>  state.cartREDUCER)
    console.log(cartItems.value);

    
  const  number  =  1

    return (<>
    <div   className="shoppingCART">
           
           {cartItems.value.map((item)=>{
            return (<div  className="SINGLEcartITEMcontainer"  key  =  {item.id}>
                     <p className="itemNAME">{item.name}</p>
                     <p>{item.price/1000}$</p>
                     <img  src={item.image}/>
                     <div  className="itemsAMOUNTcontrolCONTAINER">
                        <h2>+</h2>
                        <h1>{number}</h1>
                        <h2>-</h2>
                     </div>

            </div>)
           })}
    </div>
    </>)
}


export   default   ShoppingCart