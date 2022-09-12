import React,{useEffect} from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home"
import Error from "./Error";
import CheckOut from './CheckOut';
import LogIn from './LogIn';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './footer';

import Payment from './Payment';
import Orders from './Orders';
const stripePromise =loadStripe("pk_test_51LbKwzSCMD3cSa2TivhDbGqicQJHcATkiMTfnPuHnaSlqOpUQ7AIC3aIA5LZTwSmKb2RFzN6padVWXD1YEdHLXVQ006QbeHQBr");


function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
     //tracked looged in,logged out whatever
      console.log(`the user is `,authUser);
      if(authUser){
        //user just logged in//was logged in
        dispatch({
          type:"SET_USER",   //every time shoot a event to user in data layer when looged .....
          user:authUser,
        })
      
      }
      else{
        //user is logged out
        dispatch({
          type:"SET_USER",
          user:null,
        })

      }
    })
  },[])//empty then once refresh,otherwise the parameters which is passesed if they cganged-refresh
  return (
    <BrowserRouter>
    <div className="App">
    <Header/>
 

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/LogIn" element={<LogIn/>} />
    <Route path="/checkout" element={<CheckOut/>} />
    <Route path="/orders" element={<Orders/>}/>
    <Route path="/payment" element={<Elements stripe={stripePromise} ><Payment/></Elements>} />

    <Route path="/*" element={<Error/>} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>

   
  );
}
export default App;
