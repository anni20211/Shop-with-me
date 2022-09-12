import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home_container' >
        <img  className=" home_image "
          src='https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_FantasticBeastsSODRevised/babc7901-3ed1-49db-b2da-88ea10d9f9be._UR3000,600_SX1500_FMwebp_.jpeg'
          alt="homo logo"
         />
        <div className="home_row" >
           <Product 
           id="27647365"
           title="Lean startup is a methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable"  price={20.99} img="https://th.bing.com/th/id/OIP.FfPWrCwxzlwrHzhXT22h4QHaHa?pid=ImgDet&rs=1" rating={5} />
           <Product
           id="48349024"
            title="
            Enjoy Big Blender Power on the Go. Perfectly Blended Smoothies Anywhere. Get Yours Now!" 
            price={308.05} img="https://th.bing.com/th/id/OIP.QEBvleqsxTD9eTU9thk2tAHaHa?pid=ImgDet&rs=1" rating={4}
           />
        {/* product */}
        {/* product */}

        </div>
        <div className='home_row'  >
        <Product 
        id="56672345"
        title="This powerful Lenovo gaming laptop deal is $300 off at Walmart - Best 5 VPN" 
         price={300.05} img="https://th.bing.com/th/id/OIP.uDU025HpiEGpG-pswHSbYQHaHa?pid=ImgDet&rs=1" rating={5}/>
        <Product
         id="78653422"
         title="Echo Dot (3rd Gen), Certified Refurbished, Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"  price={70.06} img="https://m.media-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" rating={5}/>
        <Product
          id="98872386"
         title="Fujitsu UH-X 11th Gen Intel Core i7 13.3” FHD IPS 400Nits Thin & Light Laptop(16GB/512GB SSD/Windows..."  price={1200.08} img="https://m.media-amazon.com/images/I/91MVVK14sEL._AC_CR0%2C0%2C0%2C0_SX480_SY360_.jpg" rating={3}/>
        {/* product */}
        {/* product */}

        </div>
        <div className='home_row'  >
        {/* product */}
        <Product 
        id="76435687"
        title="2022 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"  price={10.04} img="https://images-eu.ssl-images-amazon.com/images/I/41viAWscfNS._SY445_SX342_QL70_FMwebp_.jpg" rating={4}/>

        </div>
          
        </div>
      
    </div>
  );
}

export default Home;
