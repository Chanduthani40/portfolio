import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Your Company. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
