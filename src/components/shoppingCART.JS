import     {useSelector    }   from     "react-redux" 
/*
here   is the  plan   :
show  charactersitics   of the arr  cartItems
but diplay   set    

*/ 
const     ShoppingCart=()=>{
    const  cartItems   = useSelector((state)=>  state.cartREDUCER)
    console.log(cartItems.value);

    


    return (<>
    <div   className="shoppingCART">
           shoppingCART 
           {cartItems.value.map((item)=>{
            return (<div    key  =  {item.id}>{item.name}</div>)
           })}
    </div>
    </>)
}


export   default   ShoppingCart