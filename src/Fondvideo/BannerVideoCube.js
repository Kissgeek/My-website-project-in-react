// BannerVideo.js
import React from 'react';

function BannerVideo() {
  return (
    <div className="banner-video-cube">
      <video autoPlay loop muted playsInline className="banner-video">
        <source src="/Videos/Cubes.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>

    </div>
  );
}

export default BannerVideo;
