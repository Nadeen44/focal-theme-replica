// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../styles.css';
// Import images
import image1 from '../assets/images/slide-1.webp';
import image2a from '../assets/images/slide-2.1.webp';
import image2b from '../assets/images/slide-2.2.webp';
import image3 from '../assets/images/slide-3.webp';
import image4a from '../assets/images/slide-4.1.webp';
import image4b from '../assets/images/slide-4.2.webp';
import image5 from '../assets/images/slide-5.webp';

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="slide">
          <img src={image1} alt="Slide 1" />
          <div className="overlay">
            <p>PREMIUM COLLECTION</p>
            <h1 className='text-6xl font-extrabold' >THE HERITAGE COLLECTION</h1>
            <button className='mx-3 mt-8'>LEARN MORE</button>
            <button>SHOP</button>

          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="dual-images">
            <img src={image2a} alt="Slide 2A" />
            <img src={image2b} alt="Slide 2B" />
          </div>
          <div className="overlay-2 justify-center">
            <p className='font-semibold'>MEET THE</p>
            <h1 className='text-6xl font-extrabold' >SAGE COLLECTION</h1>
            <button className='justify-center'>LEARN MORE</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src={image3} alt="Slide 3" />
          <div className="overlay">
            <h2>Title 3</h2>
            <p>Subtitle 3</p>
            <button>Button 3</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="dual-images">
            <img src={image4a} alt="Slide 4A" />
            <img src={image4b} alt="Slide 4B" />
          </div>
          <div className="overlay">
            <h2>Title 4</h2>
            <p>Subtitle 4</p>
            <button>Button 4</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <img src={image5} alt="Slide 5" />
          <div className="overlay">
            <h2>Title 5</h2>
            <p>Subtitle 5</p>
            <button>Button 5</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
