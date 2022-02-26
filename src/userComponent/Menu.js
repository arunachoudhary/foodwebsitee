import React, { createContext, useState } from "react"
// import { JsonData } from "../JsonData"
import "./Menu.css"
 import { JsonData } from "../JsonData"
import Product_card from "./Product_card"
import Navbar from "./Navbar"

const Cartcount=createContext();
const Menu =()=>{
    const [count,setCount]=useState(0)

const inCreament=()=>{
    setCount(count+1)
}
const Decreament=()=>{
    if(count>0){
    setCount(count-1)
}else{
    alert("Not valid in minus Your cart")
    setCount(0)
}
}
    return(
        <>
        <Cartcount.Provider value={count}>
       <Navbar/>
       </Cartcount.Provider>
         
       
        <div className="main-div">
        {JsonData.map((product_item)=> (
            
            <Product_card Decr={Decreament} Inc={inCreament} item={product_item} />
        ))}
        </div>
        </>
    )
}
export default Menu;
export {Cartcount};