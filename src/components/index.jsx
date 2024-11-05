import React from "react";
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';





const ContactUs = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Navigate to the home page
  };


  return (
    <div className="contact-container">
    <div className="arrow-and-heading-container">
      <button className="arrow-button" onClick={handleClick}>
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" />
    </button>
      <h1 className="contact-us">Contact Us</h1>
    </div>
      <p className="contact-message">Any question or remarks? Just write us a message!</p>
      <div className="contact-content">
        <div className="contact-info">
          <h1 className="contact-information">Contact Information</h1>
          <div className="information-container">
            <p className="information">
            <i className="fa-solid fa-phone-volume icon"></i>
               +1012 3456 789</p>
            <p className="information">
            <i class="fa-regular fa-envelope icon"></i>
               demo@gmail.com</p>
            <p className="information">
            <i class="fa-solid fa-location-dot icon"></i>
               245 sector 7 bendre nagar, Bangalore</p>
          </div>
        </div>
        <form className="contact-form">
          <div className="name-fields">
            <div className="name-container">
              <label className="name">First Name</label>
              <input type="text"  className="underline-input" />
            </div>
            <div className="name-container">
              <label className="name">Last Name</label>
              <input type="text"  className="underline-input" />
            </div>
          </div>
          <div className="email-phone-fields">
            <div className="email-container">
              <label className="name">Email</label>
              <input type="email"  className="underline-input" />
            </div>
            <div className="email-container">
              <label className="name">Phone Number</label>
              <input type="tel"  className="underline-input" />
            </div>
          </div>
          <div className="subject-field">
            <label>Select Subject?</label>
            <div className="radio-buttons">
              <label>
                <input type="radio" name="subject" value="general" defaultChecked />
                General Enquiry
              </label>
              <label>
                <input type="radio" name="subject" value="healthcare" />
                Healthcare Services
              </label>
              <label>
                <input type="radio" name="subject" value="insurance" />
                Insurance and Costs
              </label>
            </div>
          </div>
          <div className="message-field">
            <label className="message">Message</label>
            <textarea placeholder="Write your message..." className="underline-input-1" />
          </div>
          <div className="button-container">
          <button type="submit" className="send-message-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
