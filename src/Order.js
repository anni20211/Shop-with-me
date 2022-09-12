import React from 'react';
import "./Order.css";
import moment from "moment";
import CheckOutProduct from './CheckOutProduct';
import CurrencyFormat from 'react-currency-format';

function Order({order}) {
  return (
    <div className='order'  >
    <h2>Order</h2>
    <p>{moment.unix(order.data.created).format("MMMM Do YYYY ,h:mma")}</p>
    <p className="order_id"  >
        <small>{order.id}</small>
        </p>
        {order.data.bascket?.map(item=>(
            <CheckOutProduct 
                 id={item.id}
                 title={item.title}
                 img={item.img}
                 price={item.price}
                 rating={item.rating}
                 hideButton
                />
        ))}
           <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3 className='order_total'  >Order total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={order.data.amount} //props passing
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
   

      
    </div>
  );
}

export default Order;
