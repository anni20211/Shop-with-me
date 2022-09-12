import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useNavigate} from "react-router-dom";

function SubTotal() {
    const [{bascket},dispacth]=useStateValue();
    const navigate=useNavigate();
  return (
    <div className='subtotal' >
     <CurrencyFormat
        renderText={(value)=>(
         <>
            <p> Subtotal ({bascket.length} items): <strong>{value}</strong></p>
            <small className="subtotal_gift" >
            <input type="checkbox" />
            This order contains a gift
           
            </small>
         </>
        )}
        decimalScale={2}
        value={getBasketTotal(bascket)}//props passing
        displayType={'text'}
        thousandSeparator={true} 
        prefix={'$'} 
     /> 
     <button onClick={(e)=>navigate("/payment")} >Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
