const functions = require("firebase-functions");
const express=require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51LbKwzSCMD3cSa2TUS34O2AnRcAtXyTNUqu5tPD4st1x3wjbexy7dzmgjoo1DSRT2hPLfofbViR7PlgZPruRQ2TK005G55sEaf')
//ApI
const app=express();
//midleware
app.use(cors({origin:true}));
app.use(express.json());

//db

 //root
 app.get("/",(req,res)=>{
    res.status(200).send("hello programmers(ankit kumar)");
 });
app.post('/payments/create',async(req,res)=>{
    try{
        const total=req.body.total; 
        console.log(total)
        console.log("payment  request recieved=>",total)
        const paymentIntent=await stripe.paymentIntents.create({
            amount:total,//subunits currency
            currency:'INR' ,
        });
        //ok-created
        res.status(201).send({
            clintSecret:paymentIntent.client_secret,
        })
    }catch(error){
       res.status(500).json({
        message:error.message,
       })
    }
   
}) 

 //listen
 exports.api=functions.https.onRequest(app);//backend express running on cloud fn
 //ex->endpoint
 //http://localhost:5001/clone-e51c6/us-central1/api