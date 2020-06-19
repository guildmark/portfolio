import React, {useState} from 'react';
import Profile from "../images/profile.jpg";
function About()  {

    return(
        <div>
            <h2>About Me</h2>
            <img src={Profile} alt="profile"></img>
            <div>
                <p> I am currently working on my Masters in Interaction Technology and Design!</p>
            </div>
            <div>
                <h3>Experience</h3>
                <p>Here you can see the things I am more or less prolific in</p>
            </div>
        </div>
    )
}
export default About;