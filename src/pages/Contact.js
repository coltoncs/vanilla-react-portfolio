import React, { useState } from 'react';

import './Contact.css';

function Contact(){
    const [formData, setFormData] = useState({});

    function getFormData({fname, lname, email, subject, message}){

    }

    return (
        <section>
            <div className="header">
                <h1>Let's get in contact</h1>
            </div>

            <form>
                <label for="fname">First Name:</label>
                <input name="fname" type="text" placeholder="First Name"/>
                <label for="lname">Last Name:</label>
                <input name="lname" type="text" placeholder="Last Name"/>
                <label for="email">Email:</label>
                <input name="email" type="email" placeholder="Email"/>
                <label for="fname">Subject:</label>
                <select>
                    <option>Inquire about work</option>
                </select>
                <label for="message">Message:</label>
                <textarea name="message" placeholder="Enter your message here..." rows="5"></textarea>
            </form>
        </section>
    );
}

export default Contact;