import React from 'react';
import minibanner from '../assets/images/minibanner.png'
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Videos = () => {
  return (
    <section className='videos'>
      <div className='videos__items'>
        <div className="iframe">
          <iframe src="https://player.vimeo.com/video/718381305?h=fe7fd7280a&amp;dnt=1&amp;app_id=122963" width="800" height="450" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="Website_Video_InfinitamenteMais_PT_BR"></iframe>
        </div> 
        <div className="carousel">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src={minibanner} alt="" /></SwiperSlide>
          <SwiperSlide><img src={minibanner} alt="" /></SwiperSlide>
          <SwiperSlide><img src={minibanner} alt="" /></SwiperSlide>
          <SwiperSlide><img src={minibanner} alt="" /></SwiperSlide>
          
        </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Videos