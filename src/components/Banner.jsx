import React from 'react';
import bannerPrincipal from '../assets/images/bannerPrincipal.png';
import bannerPrincipalMobile from '../assets/images/bannerPrincipalMobile.png';

const Banner = () => {
  return (
    <section className='banner'>
      <div className="banner__content">
        <picture>
          <source media="(max-width: 799px)" srcset={bannerPrincipalMobile} />
          <source media="(min-width: 800px)" srcset={bannerPrincipal} />
          <img src={bannerPrincipal} alt="Banner Principal X" />
        </picture>
        <div className="text-cta">
          <p>Texto chamativo</p>
          <span>Subtitulo chamativo</span>
        </div>
      </div>
    </section>
  )
}

export default Banner