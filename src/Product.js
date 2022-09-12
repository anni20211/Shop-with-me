import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({id,title,img,price,rating}) {
  const [{bascket},dispatch]=useStateValue();
  
  const AddItems=()=>{
    //dispacth the item into the store
    dispatch({
      type:"ADD_TO_BASCKET",
      item:{
        id: id,
        title:title,
        img:img,
        price:price,
        rating:rating 
      }
    })
  }
  return (
    <div className='product' >

       <div className='product_info'   >
           <p>{title}</p>
           <p className='price_info' >
            <small>$</small>
            <strong>{price}</strong>
           </p>
           <div className='product_rating' >
           {Array(rating).fill().map((_,i)=>{
            return( <p>✨</p>);
           })}
             
           </div>
       </div>
         <img src={img}
         alt="start " />

         <button onClick={AddItems} >Add to bascket</button>
      
    </div>
  );
}

export default Product;
