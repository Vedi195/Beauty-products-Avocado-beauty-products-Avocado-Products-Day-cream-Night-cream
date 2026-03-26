import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPage.css';

const PrivacyPage = () => {
  return (
    <div className="privacyPage" data-testid="privacy-page">
      <div className="container">
        <div className="privacyHeader">
          <h1 className="privacyTitle">Privacy Policy</h1>
          <p className="lastUpdated">Last updated: January 2025</p>
        </div>

        <div className="privacyContent">
          {/* Data Collection */}
          <section className="privacySection">
            <h2>
              💾 Data We Collect
            </h2>
            <p>
              At Avocado Herbal Products, we are committed to protecting your privacy. 
              We collect minimal data necessary to provide you with the best shopping experience.
            </p>
            <p>
              <strong>Information we may collect includes:</strong>
            </p>
            <ul>
              <li>Contact information (phone number, email) when you reach out to us</li>
              <li>Delivery address when you place an order via call or WhatsApp</li>
              <li>Product preferences and wishlist items stored locally on your device</li>
              <li>Anonymous usage data to improve our website experience</li>
            </ul>
          </section>

          {/* How We Use Data */}
          <section className="privacySection">
            <h2>
              🛡️ How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your purchases</li>
              <li>Provide customer support</li>
              <li>Send order updates and delivery notifications</li>
              <li>Improve our products and services</li>
            </ul>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              Your data is used solely for the purposes outlined above.
            </p>
          </section>

          {/* Cookies */}
          <section className="privacySection">
            <h2>
              🍪 Cookies & Local Storage
            </h2>
            <p>
              Our website uses local storage to save your wishlist items, allowing you 
              to keep track of products you're interested in even after closing the browser.
            </p>
            <p>
              We may also use cookies and similar technologies to:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality</li>
            </ul>
            <p>
              You can disable cookies in your browser settings, but this may affect 
              some features of our website.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="privacySection">
            <h2>
              🔗 Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party services such as WhatsApp 
              and social media platforms. These services have their own privacy policies, 
              and we encourage you to review them.
            </p>
            <p>
              We are not responsible for the privacy practices or content of third-party 
              websites or services.
            </p>
          </section>

          {/* Contact */}
          <section className="privacySection">
            <h2>
              📞 Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <p>
              You can reach us via phone or WhatsApp, and we'll be happy to address 
              any concerns you may have about your privacy.
            </p>
          </section>

          {/* Contact Note */}
          <div className="contactNote">
            <p>Have questions about your privacy? We're here to help.</p>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;