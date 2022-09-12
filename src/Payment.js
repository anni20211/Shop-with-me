import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckOut from "./CheckOut";
import CheckOutProduct from "./CheckOutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
// import axios from './Axios';
import { db } from "./Firebase";
import axios from "axios";
function Payment() {
  const url =
    "http://localhost:5001/clone-e51c6/us-central1/api/payments/create"; // local api endpoint
  const [{ bascket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clintSecret, setClintsecret] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    // generate the stripe secret which allows us to cahrge the customers
    const getClintSecret = async () => {
      await axios
        .post(url, {
          total: getBasketTotal(bascket) * 100,
        })
        .then((res) => setClintsecret(res.data.clintSecret))
        .catch((err) => {
          console.log(err);
        });
      //whenever bascket then set the secret
    };
    getClintSecret();
  }, [bascket]);
  console.log("Sercret is=>", clintSecret);
  const handleSubmit = async (event) => {
    //all stipr stuff............
    event.preventDefault();
    // if (!stripe || !elements) {
    //     return;
    // }
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clintSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            bascket: bascket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
          console.log(user);
        dispatch({
          type: "EMPTY_BASCKET",
        });
        navigate("/orders");
      })
      .catch((error) => alert(error.message));
  };
  const handleChange = (event) => {
    //listen changes in card element
    //display error if customer type their card detail
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          CheckOut <Link to="/checkout">{bascket?.length}items</Link>
        </h1>
        {/* payment information */}
        <div className="payment_info">
          <div className="payment_title">
            <h3>Delivery Order</h3>
          </div>
          <div className="payment_address">
            <h5>{user?.email}</h5>
            <p>234 Nh 28</p>
            <p>Gorakhpur,city</p>
          </div>
        </div>
        {/* product->review  */}
        <div className="payment_info">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {bascket.map((item) => (
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
        {/*real  payment methode */}
        <div className="payment_info">
          <div className="payment_title">
            <h3>Payment method</h3>
          </div>
          <div className="payment_details">
            {/* stipe method is very good at ... stripe.js contains info of credit cards*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_pricing_detail">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order total:{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(bascket)} //props passing
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <sapn>
                    {" "}
                    {processing ? <p>Processing.....</p> : "Buy now"}
                  </sapn>{" "}
                </button>
              </div>
              {/* error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
