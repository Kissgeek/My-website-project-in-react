import React from 'react';
import './Footer.css'; // Assurez-vous d'importer votre fichier CSS pour le style
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#fb5977' }}>
      <div className="footer-content">
        <div className="separator"></div>
        <p className="footer-text">
          <span className="glow">Copyright 2023 From Scratch - Tous droits réservés</span>
        </p>
        <br />
        <br />
        <div className="social-icons">
          <a href="/" className="icon-link">
            <FaFacebook className="icon-white-3d" /></a>
          <a href="/" className="icon-link">
            <FaTwitter className="icon-white-3d" /></a>
          <a href="/" className="icon-link">
            <FaInstagram className="icon-white-3d" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
