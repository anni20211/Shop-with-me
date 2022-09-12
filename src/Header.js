import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from "./Firebase";

function Header() {
  const [{bascket,user},dispacth]=useStateValue();//user added after looged in

  const UserAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header" >
    <Link to="/">
    <img 
    className="amazon_logo"
    src="https://th.bing.com/th/id/OIP.lMTua8Ng9GvdDiWVNri1NAHaEJ?pid=ImgDet&w=640&h=358&rs=1" 
        alt="amazon logo"
    />  
    </Link>
    
    <div className="search_bar"  >
     <input className='header_input'  type="text"  />
     <SearchIcon className='search_icon' />
     {/* logo */}
    </div>
    <div className='nav_header' >      
        
       <Link  to={!user && "/LogIn"} > 
        {/*!user && "/LogIn"=>if !user then go to login*/}
        <div  onClick={UserAuthentication} className='header_option'  >
        <span className='option_line_1' > Hello,{!user?"Guest":user.email}</span>
        <span className='option_line_2' >{user?`Sign Out`:"Sign In"}</span>
        </div>
       </Link>
       <Link to="/orders"  >
       <div className='header_option'  >
        <span className='option_line_1' > Returns</span>
        <span className='option_line_2' >& Orders</span>
        </div>
       </Link>
        
        <div className='header_option'  >
        <span className='option_line_1' > Your</span>
        <span className='option_line_2' > prime</span>
        </div>
        <Link to="/checkout">
        <div className='bascket_option'  >
        <ShoppingCartIcon />
        <span className='option_line_2 bascketCount'  >{bascket?.length}</span>
        </div>
        </Link>
  
    </div>
    </div>
  );
}

export default Header;
