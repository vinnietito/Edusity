import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p>
          Thank you for your interest in Maple Ridge Academy. We are always happy to connect with
          parents, guardians, students, and well-wishers who would like to learn more about our
          school community. Whether you’re making an inquiry about admissions, have a suggestion
          to share, or simply want to reach out for more information about our programs and
          activities, we welcome your message.
        </p>
        <p>
          Please don’t hesitate to reach out using the contact form or the details provided below.
          Every question matters, and your feedback plays a key role in helping us continue to
          create a nurturing, inclusive, and enriching learning environment for all our students.
          We look forward to hearing from you!
        </p>
        <ul>
          <li><img src={mail_icon} alt="" />Email: <a href="mailto:vincentnjuguna69@gmail.com">vincentnjuguna69@gmail.com</a></li>
          <li><img src={phone_icon} alt="" />Phone: <a href="tel:+254792769123">+254 792 769 123</a></li>
          <li><img src={location_icon} alt="" />
            Maple Ridge Academy, 42 Ridgeway Lane,<br />
            Brookdale District, Nairobi, Kenya
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form >
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span></span>
        
      </div>
    </div>
  );
};

export default Contact;
