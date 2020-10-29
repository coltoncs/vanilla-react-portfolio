import React, { useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;

  & input, & select, & textarea {
    border-radius: 20px;
    padding: 5px 15px;
    border: 2px solid #333333;
  }

  @media screen and (max-width: 700px){
    & {
        display: flex;
        flex-direction: column;
    }
  }
`;

function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const formRef = useRef(null);

  return (
    <section>
      <div className="header">
        <h1>Let's get in contact</h1>
      </div>

      <ContactForm ref={formRef}>
        <label for="fname">First Name:</label>
        <input name="fname" type="text" placeholder="First Name" ref={register({required: true})} />
        <label for="lname">Last Name:</label>
        <input name="lname" type="text" placeholder="Last Name" ref={register({required: true})} />
        <label for="email">Email:</label>
        <input name="email" type="email" placeholder="Email" ref={register({required: true})} />
        <label for="fname">Subject:</label>
        <select ref={register}>
          <option>Inquire about work</option>
        </select>
        <label for="message">Message:</label>
        <textarea name="message" placeholder="Enter your message here..." rows="5" ref={register}></textarea>
      </ContactForm>
    </section>
  );
}

export default Contact;