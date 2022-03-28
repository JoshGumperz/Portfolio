import { useState, useEffect } from 'react';
import "./index.css"
import emailjs from "emailjs-com"
import SubmitBtn from '../../components/Button/SubmitBtn';

function Contact({ scrollToSection }) {
   const [submitted, setSubmitted] = useState(false)

// use emailjs to send me an email with whatever message the user sends 
   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ww36wuc', 'template_irus4ju', e.target, 'Cec0X1qCuog3QOZjj')
      .then((result) => {
          console.log(result.text);
          setSubmitted(!submitted)
      }, (error) => {
          console.log(error.text);
      });
   } 

   useEffect(() => {
       scrollToSection();
   })

   if(submitted) {
    return (  
        <div className='contact-container'>
            <div className='contact-bodyContainer'>
                <div className='contact-messageContainer'>
                        <h1 className="contact-h1">Thank you!</h1>
                        <span className='contact-inline'>
                            <p className="contact-submittedMessage">Your message has been sent! I'll try to respond to you sometime within the next 48 hours. If you'd like to send another message, click <a className="contact-link" onClick={() => {setSubmitted(!submitted)}}>here.</a></p>
                        </span>
                        
                </div>
            </div>
        </div>
    );   
   } 

   return (
       <div className='contact-container'>
           <div className='contact-bodyContainer'>
                <form className='contact-form' onSubmit={handleSubmit}>
                        <h2 className="contact-h2">Send Me A Message</h2>
                        <div className='contact-inputContainer'>
                            <input className="contact-input" type="email" name="email" placeholder="Your Email" required/>
                            <input className="contact-input" type="text" name="name" placeholder="Your Name" required/>
                        </div>
                        <div className='contact-inputContainer'>
                            <input className="contact-message" type="text" name="message" placeholder="Message" required/>
                        </div>
                        <span className='contact-submitContainer'>
                            <SubmitBtn type="submit"/>
                        </span>
                </form>
           </div>
       </div>
   )
}

export default Contact;