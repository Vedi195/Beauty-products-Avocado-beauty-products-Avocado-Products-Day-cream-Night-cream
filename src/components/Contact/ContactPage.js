import React from 'react';
import { SELLER_PHONE, getWhatsAppLink, getCallLink } from '../../utils/helpers';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contactPage" data-testid="contact-page">
      <div className="container">
        <div className="contactHeader">
          <h1 className="contactTitle">Contact Us</h1>
          <p className="contactSubtitle">
            Have questions or want to place an order? We're here to help!
          </p>
        </div>

        <div className="contactContent">
          {/* Seller Card */}
          <div className="sellerCard">
            <div className="sellerAvatar">
              <span className="icon">👤</span>
            </div>
            <h2 className="sellerName">Avocado Herbal Products</h2>
            <p className="sellerRole">Your Wellness Partner</p>

            <div className="contactButtons">
              <a 
                href={getCallLink()} 
                className="contactBtn call"
                data-testid="contact-call-btn"
              >
                <span className="icon">📞</span>
                Call Now
              </a>

              <a 
                href={getWhatsAppLink()} 
                className="contactBtn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
              >
                <span className="icon">💬</span>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contactInfo">
            <h3 className="infoTitle">Get in Touch</h3>
            
            <div className="infoList">

              <div className="infoItem">
                <div className="infoIcon">
                  <span>📞</span>
                </div>
                <div className="infoContent">
                  <h4>Phone</h4>
                  <p>{SELLER_PHONE}</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon">
                  <span>💬</span>
                </div>
                <div className="infoContent">
                  <h4>WhatsApp</h4>
                  <p>Available for instant messaging</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon">
                  <span>⏰</span>
                </div>
                <div className="infoContent">
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="infoItem">
                <div className="infoIcon">
                  <span>📍</span>
                </div>
                <div className="infoContent">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>

            </div>

            <div className="orderNote">
              <h4>How to Order</h4>
              <p>
                To place an order, simply call or WhatsApp us directly. 
                Share the product name and quantity, and we'll guide you through the 
                payment and delivery process. It's that simple!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;