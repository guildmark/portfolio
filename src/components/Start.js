import React, {useState} from 'react';
import "../App.css";
import Code from "../images/code.jpg";
import About from "../images/about.png";
import {Link} from 'react-router-dom';
import { BrowserRouter as Router,Route} from "react-router-dom";
import axios from 'axios';


function Start() {

    const [data, setData] = useState(null);

const testBackend = () => {
    axios.get("http://localhost:5000/express_backend")
    .then(res => console.log(res.data));
    
}    

return(
    <div>
        {/* Add image with MK logo */}
        <h2>Hi, I'm marcus!</h2>
        <p className="centerParagraph">Found out more about me below</p>
        {/* Add buttons with images for work and about */}
        <div className="center">
            <Link to="/Work">
                <img className="imageLink" src={About} alt="Link to information"/>
            </Link>
            <Link to="/About">

                <img className="imageLink" src={About} alt="Link to information"/>
            </Link>
            <Link to="/Contact">
            <img className="imageLink" src={About} alt="Link to information"/>
            </Link>

            <button onClick={testBackend}>TEST</button>
            <div>
                <p>data: {data}</p>
            </div>
        </div>
    </div>
)
}

export default Start;