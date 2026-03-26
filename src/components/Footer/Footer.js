import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer" data-testid="footer">
      <div className="footerBottom">
        <p className="copyright">
          © 2026 Avocado Herbal Products | Designed with 💚 | All Rights Reserved
        </p>

        <div className="footerBottomLinks">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/about">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;