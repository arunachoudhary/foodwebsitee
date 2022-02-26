import React from "react"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Welcome = () => {
    return (
        <>
            <Navbar />
            <div className="container mycontain">
                <center><h1>Welcome To Food's Kichen</h1></center>
               <center><Link to="/menu"> <button className="btn btn-success">Go To Menu</button></Link></center>
            </div>
        </>
    )
}
export default Welcome;