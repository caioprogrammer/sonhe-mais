import React from 'react';
import bannerContador from '../assets/images/banner-contador.png';
import bannerContadorMobile from '../assets/images/banner-contador-mobile.png';

import bannerExtra from '../assets/images/banner-contador.png';

const Cronometer = () => {
  return (
    <section className='cronometer'>
      <div class="wpb_wrapper">
        <p>
          <picture>
            <source media="(max-width: 799px)" srcset={bannerContadorMobile} />
            <source media="(min-width: 800px)" srcset={bannerContador} />
            <img src={bannerContador} alt="Banner Principal X" />
          </picture>
        </p>
        <p>
          <picture>
            <source media="(max-width: 799px)" srcset={bannerContadorMobile} />
            <source media="(min-width: 800px)" srcset={bannerExtra} />
            <img src={bannerExtra} alt="Banner Principal X" />
          </picture>
        </p>
      </div>
    </section>
  )
}

export default Cronometer