import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { MdRestaurant } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import{Cartcount} from "./Menu"
import "./Navbar.css"
const Navbar=()=>{
  const mycount=useContext(Cartcount);
    const  style={color:"#fff",
            height:"50px",
        width:"50px",
        marginLeft:"50px"    }

     
    return(
        <>
       
<nav class="navbar navbar-expand-sm bg-primary navbar-dark">
<div class="container-fluid">
  <ul class="navbar-nav">
    <li class="nav-item">
    <MdRestaurant style={style} />
    </li>
    <li class="nav-item m-2">
      <Link  to="/menu"><h5 class="nav-link mylogo" >Food's Resturent</h5></Link>
    </li>
    <li class="nav-item m-2">
      <Link  to="/"><h5 class="nav-link mylogo" >Home</h5></Link>
    </li>
   
   
  </ul>
  <div> <Link to="/checkout"><FaCartPlus style={{color:"#fff",height: "60px",width: "52px"}}/><button style={{borderRadius:"30px",postion:"absulate",left:"20px"}}>{mycount}</button></Link></div>
</div>
</nav>


      
</>
    )
}
export default Navbar;