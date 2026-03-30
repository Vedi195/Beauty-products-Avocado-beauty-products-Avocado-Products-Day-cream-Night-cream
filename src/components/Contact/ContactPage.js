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
            <h2 className="sellerName">Mitali Patel</h2>
            <p className="sellerRole">Your Wellness Partner</p>

            <div className="contactButtons">
              <a 
                href={getCallLink()} 
                className="contactBtn call"
                data-testid="contact-call-btn"
              >
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.52 2 2 0 0 1 3.62 1.5h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.09a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </span>
                Call Now
              </a>

              <a 
                href={getWhatsAppLink()} 
                className="contactBtn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp-btn"
              >
                <span className="icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </span>
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
                  <p>Vadodara, Gijarat, India</p>
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