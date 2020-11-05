import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1rem;

  & input, & textarea {
    border-radius: 25px;
    padding: 10px 15px;
    background: #FFFFF9;
    border: 0;
  }

  & input::placeholder, & textarea::placeholder {
    color: black;
  }

  & .sub-btn {
    grid-column: 1/3;
    background: #FFFFF9;
    border-radius: 20px;
    padding: 15px;
    border: 0;
  }

  @media screen and (max-width: 700px){
    & {
        display: flex;
        flex-direction: column;
    }
  }
`;

export default function Contact() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => console.log(values);

  return (
    <section>
      <div className="header">
        <h1>Let's get in contact</h1>
      </div>

      <ContactForm onSubmit={handleSubmit(onSubmit)}>
        <label for="fname">First Name:</label>
        <input name="fname" type="text" placeholder="First Name" ref={register({required: true})} />
        <label for="lname">Last Name:</label>
        <input name="lname" type="text" placeholder="Last Name" ref={register({required: true})} />
        <label for="email">Email:</label>
        <input name="email" type="email" placeholder="Email" ref={register({required: true})} />
        <label for="message">Message:</label>
        <textarea name="message" placeholder="Enter your message here..." rows="5" ref={register}></textarea>
        <button className="sub-btn" type="submit">Send</button>
      </ContactForm>
    </section>
  );
}