import React from "react";
import {Link} from "react-router-dom";
const AboutUs = () => {
    return ( 
        <div className="bg-info">
            <h1 className='text-center'>now in About us</h1>
                <ul>
                    <li><h6><Link to="./home">home</Link></h6></li>
                    <li><h6><Link to="./ViewCard">to ViewCard</Link></h6></li>
                </ul>
        </div>
     );
}
export default AboutUs;