import React, {useState} from 'react';
import "../App.css";
import Code from "../images/code.jpg";
import About from "../images/about.png";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router,Route} from "react-router-dom";


function Start() {

return(
    <div>
        {/* Add image with MK logo */}
        <h2>Hi, I'm marcus!</h2>
        <p className="centerParagraph">Found out more about me below</p>
        {/* Add buttons with images for work and about */}
        <div>
            <Link to="/Work" href="#" >
                <img className="imageLink" src={About} alt="Link to information"/>
            </Link>
            <Link to="/About" href="#" >
        
                <img className="imageLink" src={About} alt="Link to information"/>
            </Link>
            <Link to="/Contact" href="#" >
            <img className="imageLink" src={About} alt="Link to information"/>
            </Link>
        </div>
    </div>
)
}

export default Start;