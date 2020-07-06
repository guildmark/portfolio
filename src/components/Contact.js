import React, {useState} from 'react';

//Create a contact page for people to enter information, connect to actual mail
function Contact() {
    return (
        <div>
            <h3>Contact</h3>

            {/*Add contact form and connect this to my mail*/}
            <form>
                <div>
                    <label>Name</label>
                    <br/>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label>Subject</label>
                    <br/>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label>Description</label>
                    <br/>
                    <input type="text" className="form-control"/>
                </div>
            </form>
         </div>
    )
}
export default Contact;