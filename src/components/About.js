import React, {useState} from 'react';
import Profile from "../images/profile.jpg";
import {Link} from "react-router-dom";
function About()  {

    return(
        <div>
            <h2>About Me</h2>
            <div>
                {/* Add MK logo to return home */}
                <Link to="/" href="#">HOME</Link>
            </div>

            <img src={Profile} alt="profile"></img>

            <div>
                <p> I am currently working on my Masters in Interaction Technology and Design!</p>
            </div>
            <div>
                <h3>Experience</h3>
                <p>Here you can see the things I am more or less prolific in</p>
            </div>


            <div>
                <h3>Contact</h3>

                {/*Add contact form */}
                <form>
                    <label>Name</label>
                    <input type="text" className="form-control"/>
                </form>
            </div>
        </div>
    )
}
export default About;