import React from "react";
import { FaGoogle } from 'react-icons/fa';
import {Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <header>
                <span className="px-1 d-flex">
                   <span><FaGoogle style={{}}/>Google Meet</span>
                   {/* <span></span>  */}
                    </span>
            </header>
            <div className="d-flex flex-fill bg-danger">
            <h1 className='text-center'>now in home</h1>
                <ul>
                    <li><h6><Link to="./ViewCard">to ViewCard</Link></h6></li>
                    <li><h6><Link to="./AboutUs">to AboutUs</Link></h6></li>
                </ul>
        </div>
        </div>
        
     );
}
 
export default Home;