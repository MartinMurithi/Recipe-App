import React from 'react';
import "./ContactSection.css";

function ContactSection() {
  return (
      <div className='contactSection'>
          <div className="description">
              <h2 className='contact'>Contact Us</h2>
              <p className="contactDescription">
                  We love hearing from our users! If you have any questions, comments, or suggestions, please don't hesitate to contact us. We want to make sure that our platform is the best it can be, and your feedback is essential to that goal.Please let us know.<br/>
                  We look forward to hearing from you !<br />
                  <span className='span'>Thank you for using Kocima!</span>
              </p>
          </div>
          <div className="contactFormSection">
              <form action="" className='contactForm'>
                  <label htmlFor="name" className='contactFormLabel'>Name</label>
                  <input type="text" name="name" id="name" />
                  <label htmlFor="email" className='contactFormLabel'>Email</label>
                  <input type="email" name="email" id="email" />
                  <label htmlFor="message" className='contactFormLabel'>Message</label>
                  <textarea name="nessage" id="message" cols="30" rows="5"></textarea>
                  <button className='sendMessageBtn'>Send Message</button>
              </form>
          </div>
    </div>
  )
}

export default ContactSection