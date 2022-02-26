import React, { useState } from "react";
const Product_card=(props)=>{
    
    return(
        <>
        
        <div id="myDIV">
        <div className="div-wrapper">
        <h1>{props.item.title}</h1>
        <div >
        <img className="ig-wrapper" src={props.item.image}/>
        </div>
        <h2>{props.item.price}</h2>
        <button onClick={()=>{props.Inc()}} className="btn btn-success m-2">+</button><button onClick={()=>{props.Decr()}} className="btn btn-danger m-2">-</button>
        </div>
        </div>
       
        </>
    )
}
export default Product_card;