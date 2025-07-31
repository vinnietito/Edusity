import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg-icon.png'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send Us a Message <img src="" alt="" /></h3>
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
          <li>Email: <a href="mailto:vincentnjuguna69@gmail.com">vincentnjuguna69@gmail.com</a></li>
          <li>Phone: <a href="tel:+254792769123">+254 792 769 123</a></li>
          <li>
            Address: Maple Ridge Academy, 42 Ridgeway Lane,<br />
            Brookdale District, Nairobi, Kenya
          </li>
        </ul>
      </div>

      <div className="contact-col">
        {/* Add your form or map/image here */}
      </div>
    </div>
  );
};

export default Contact;
