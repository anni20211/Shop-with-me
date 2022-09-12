import React from 'react';
import "./CheckOutProduct.css";
import { useStateValue } from './StateProvider';
function CheckOutProduct({id,img,price,rating,title,hideButton}) {
    const [{bascket},dispatch]=useStateValue();
    const RemoveTheProduct=()=>{
         dispatch({
            type:"REMOVE_THE_BASCKET",
            id:id,
         })
    }
  return (
    <div className='add_cart_product'>
      <img className='checkout_image' src={img} />

      <div className='checkoutProduct_info'  >
      <p className='checkoutProduct_title' >{title}</p>
       <p className='checkoutProduct_price' >
        <small>$</small>
        <strong>{price}</strong>
       </p>
       <div className="checkoutProduct_rating" >
       {Array(rating).fill().map((_,i)=>(
        <p>✨</p>
       ))
       }
   
       </div>
       {!hideButton&&(
        <button onClick={RemoveTheProduct} >Remove from product</button>
       )}
      
      </div>
    </div>
  );
}

export default CheckOutProduct;
