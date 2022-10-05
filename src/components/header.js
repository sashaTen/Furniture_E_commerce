import     {useSelector   ,    useDispatch  }   from     "react-redux" 
import   {useEffect    }   from    "react"
import { Link } from "react-router-dom";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import {
  BsFillCaretDownFill,
  BsFillCartFill,
  BsFillPersonFill
} from "react-icons/bs";
//

import {  getITEMSfromLOCALstorage } from "../sliceFORcart";
const Header = () => {
  const   dispatch =  useDispatch()
   const  cartItems   = useSelector((state)=>  state.cartREDUCER)
   useEffect(()=>{
    dispatch(getITEMSfromLOCALstorage())   
   } , [])
  return (
    <>
      <header className="header">
        <p className="itemsAmount">{cartItems.value.length}</p>
       
        <Link to="/login">
          <BsFillPersonFill className="acountIcon" />
        </Link>
        <div className="header_menu">
          <Link to="/shoppingCART">
            <BsFillCartFill className="cart_icon" />
          </Link>
        </div>
        <Link to="/">
          <AiFillHome className="AiFillHome" />
        </Link>
      </header>
    </>
  );
};

export default Header;
