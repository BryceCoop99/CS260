import './contact.css';
import {useRef} from "react";

const Contact = () => {
  
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const messageRef = useRef(null);
  
  function sendMessageHandler(e) {
    e.preventDefault();
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phoneNumber = phoneNumberRef.current.value;
    const message = messageRef.current.value;
    
    if (name === null || name.length < 1) {
      alert("Please make sure to include your name!");
      return;
    }
    if (email === null || !email.includes("@") || email.length < 5) {
      alert("Invalid email! Please enter a valid email!");
      return;
    }
    if (phoneNumber === null || phoneNumber.length < 9) {
      alert("Invalid phone number! Please enter a valid phone number!");
      return;
    }
    if (message === null || message.length < 2) {
      alert("Please write a message!");
      return;
    }
    
    alert("Thank you " +name+ "!\n Message sent to Travel Destiny agents! We will respond shortly.");
    nameRef.current.value = '';
    emailRef.current.value = '';
    phoneNumberRef.current.value = '';
    messageRef.current.value = '';
  }
  
  return (
    <>
    <div className="page-other" id="page-other">
      <div className="default">
        <div className="container container-other">
          <div className="container-title">Leave us a message!</div>
          <div className="container-desc">Response time is usually within 1 business day!</div>
          
          <div className="input">
            <div className="input-label">Full Name:</div>
            <input className="input-field" id="inputName" ref={nameRef}/>
          </div>
          
          <div className="input">
            <div className="input-label">Email:</div>
            <input className="input-field" id="inputEmail" ref={emailRef}/>
          </div>
          
          <div className="input">
            <div className="input-label">Phone Number:</div>
            <input className="input-field" id="inputPhoneNumber" ref={phoneNumberRef}/>
          </div>
          
          <div className="input">
            <div className="input-label">Message:</div>
            <textarea className="input-box" id="inputMessage" ref={messageRef}/>
          </div>
          
          <div className="container-button" onClick={sendMessageHandler}><a>Send Message</a></div>
        </div>
      </div>
    </div>
    
    <div className="footer">
      <div className="footer-title"><a href="https://github.com/BryceCoop99/CS260">Bryce's Github</a></div>
    </div>
    </>
  );
};

export default Contact;