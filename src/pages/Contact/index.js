import { useState } from 'react';
import "./index.css"
function Contact() {
    // at this point in time, I'm not actually receiving any messages the user submits. Setting it up to actually email me whatever the user submits will probably come in the future. Until then, we just re-render the page whenever user submits a message.
   const [submitted, setSubmitted] = useState(false)

   const handleSubmit = () => {
       setSubmitted(!submitted)
   } 

   if(submitted) {
    return (  
        <div className='contact-container'>
            <div className='contact-bodyContainer'>
                <div className='contact-messageContainer' onSubmit={handleSubmit}>
                        <h1 className="contact-h1">Thank you!</h1>
                        <span className='contact-inline'>
                            <p className="contact-submittedMessage">Your message has been sent! If you'd like to send another message, click <a className="contact-link" onClick={handleSubmit}>here.</a></p>
                        </span>
                        
                </div>
            </div>
        </div>
    );   
   } 

   return (
       <div className='contact-container'>
           <div className='contact-bodyContainer'>
                <form className='contact-inputContainer' onSubmit={handleSubmit}>
                        <h2 className="contact-h2">Send Me A Message</h2>
                        <input className="contact-inputTitle" type="text" placeholder="Title" required/>
                        <input className="contact-inputMessage" type="text" placeholder="Message" required/>
                        <button className="contact-submitBtn" type="submit">Submit</button>
                </form>
           </div>
       </div>
   )
}

export default Contact;