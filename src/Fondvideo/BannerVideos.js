// BannerVideo.js
import React from 'react';

function BannerVideo() {
  return (
    <div className="banner-video-container">
      <video autoPlay loop muted playsInline className="banner-video">
        <source src="/Videos/Background-Coding-Loop.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      <h3 className="banner-text">Développeur Node & ReactJS ⚛️ | Css | Html | Javascript & Typescript 🚀<span className="blinking-icon">/</span></h3>

    </div>
  );
}

export default BannerVideo;
