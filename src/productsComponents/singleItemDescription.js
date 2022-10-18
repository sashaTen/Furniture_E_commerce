import { BsFillStarFill } from "react-icons/bs";
import Loading from "../components/loading";
import { useLocation } from "react-router-dom";
import SingleItem  from "./displaySingleComponent";
import data from "../components/data";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../context";
import { Link } from "react-router-dom";
import     {   useDispatch  }   from     "react-redux" 
import { push    } from "../reduxSlices/sliceFORcart";
const ItemDesc = () => {
  const   dispatch =     useDispatch()
  const { itemsOfCart, setItemsOfCart } = useContext(cartContext);
  const [showLoading, setShowLoading] = useState(true);
  let list   = []
  const location = useLocation();
  const state = location.state;
  //console.log();
  let itemObject = {};
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === state) {
      itemObject = data[i];
    }
  }
  //console.log(itemObject.name);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }

  for(let  i   =  0 ;    i  <    data.length ;  i++){
    
    if(data[i].category===itemObject.category){
   list.push(data[i])
    }
  }
console.log(list);
  return (
    <div>
      <section className="specificItemContainer">
        <Link to="/items">back</Link>
        <img className="specificItemImg" src={itemObject.image} />
        <div className="specificItemInfo">
          <h3>{itemObject.name}</h3>
          <div className="starIcon">
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
            <BsFillStarFill />
          </div>
          <p style={{ color: "red" }}>{itemObject.price / 100}$</p>
          <p className="specificItemDesc">{itemObject.description}</p>

          <h4
            onClick={() => {
              //setItemsOfCart([...itemsOfCart, itemObject.id]);
             dispatch(push(itemObject))
            }}
            className="specificItemCartBtn"
          >
            add to cart
          </h4>
        </div>
      </section>



<h1  className="greetFast">

      items  of the  same  category :
</h1>
 
 
 <div  className="itemsRecommendations">
          {list.map((item) => {
            return <SingleItem {...item} key={item.id} />;
          })}
        </div>
 
      
     


    </div>
  );
};

export default ItemDesc;
