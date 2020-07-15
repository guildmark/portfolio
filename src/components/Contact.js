import React, {useState} from 'react';
import axios from "axios";

//Create a contact page for people to enter information, connect to actual mail
function Contact() {

    const [data, setData] = useState(null);
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    
    //Add functions to change the parts of the mail

    const changeName = (e) => {
        setName(e.target.value);
        //console.log(e.target.value);
    }

    const changeSubject = (e) => {
        setSubject(e.target.value);
        //console.log(e.target.value);
    }

    const changeContent = (e) => {
        setContent(e.target.value);
        //console.log(e.target.value);
    }

    const submitMail = (e) => {
        e.preventDefault();
        //Create the mail object with name, subject and content

    }
    
    return (
        <div>
            <h3>Contact</h3>

            {/*Add contact form and connect this to my mail*/}
            <form>
                <div>
                    <label>Name</label>
                    <br/>
                    <input type="text" className="form-control" onChange={changeName}/>
                </div>
                <div>
                    <label>Subject</label>
                    <br/>
                    <input type="text" className="form-control"/>
                </div>
                <div>
                    <label>Description</label>
                    <br/>
                    <textarea className="form-control" cols="20" rows="5"/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Send" className="btn btn-primary"/>
                </div>
            </form>
         </div>
    )
}
export default Contact;