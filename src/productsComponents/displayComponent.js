import { useLocation } from "react-router-dom";
import InputRange from "react-input-range";
import { useState, useEffect } from "react";
import SingleItem from "./displaySingleComponent";
import data from "../components/data";
import Loading from "../components/loading";

const DisplayComponent = () => {
  const location = useLocation();
  const state = location.state;
  let list = [];
  const [price ,  setPrice]  =    useState(maxPrice())

const   changeNumber=(e)=>{
 setPrice(e.target.value)
}


function minPrice(){
    let  min   = data[0]
    for(let i   =0   ;    i   <    data.length ;  i++){
      if(data[i].price<min.price){
       min   =    data[i]
      }    
    }
    
    return    min.price
    }

    function  maxPrice(){
      let  max   = data[0]
      for(let i   =0   ;    i   <    data.length ;  i++){
        if(data[i].price>max.price){
         max  =    data[i]
        }    
      }
      
      return    max.price
      }
  



  if (state) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].category === state) {
        list.push(data[i]);
      } else if (list.length === 0) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].company === state) {
            list.push(data[i]);
          }
        }
      }
    }
  } else if (!state) {
    for (let i = 0; i < data.length; i++) {
      if(data[i].price<price){

        list.push(data[i]);
      }
      
    }
  }

  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);
  if (showLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="productsPage">

      
  
<form   className="rangeForm">
<label htmlFor="vol">Volume (between {minPrice()} and     { maxPrice() }):</label>
  <input onChange={changeNumber} type="range" id="vol" name="vol" min={minPrice()} max={maxPrice()}/>
  <input   value={price}/>
 
</form>
         <h1>FOUND   :    {list.length}</h1>
        <div className="productsContainer">
          {list.map((item) => {
            return <SingleItem {...item} key={item.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default DisplayComponent;
