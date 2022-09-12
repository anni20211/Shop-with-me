import React from 'react';
import "./CheckOut.css";
import SubTotal from './SubTotal';
import "./SubTotal.css";
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from './StateProvider';

function CheckOut() {
    const [{bascket,user},dispacth]=useStateValue();
  return (
    <div className='checkout'  >
        <div className='checkout_left' > 
          <img className='ads_image'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/ACQ_1500_100_0407.jpg" alt="amazon ad " />
            <div > 
            <h2>Hello,{user?.email}</h2>
            <h2 className='checkout_title' >Your Shopping Bascket</h2>
            {bascket.map((item)=>(
                <CheckOutProduct
                 id={item.id}
                 title={item.title}
                 img={item.img}
                 price={item.price}
                 rating={item.rating}
                />
            ))}

            </div>
        </div>
        <div className='checkout_right' >
            <SubTotal/>
        </div>
      
    </div>
  );
}
export default CheckOut;
