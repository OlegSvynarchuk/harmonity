import { Carousel } from 'react-responsive-carousel';

import useMediaQuery from '../../hooks/useMediaQuery';
import './slider.css';

import teamwork from './images/teamwork.png';

const Slider = () => {
  const ismobile = useMediaQuery(480);

  return (
    <section className="slider">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showArrows={ismobile}
        showStatus={false}
        showIndicators={!ismobile}
      >
        <div className="slider-item-wrapper">
          <div className="slider-image-wrapper">
            <img className="slider-image" src={teamwork} alt="image1" />
          </div>
          <p className="caption">lorem ipsum dolor sit</p>
        </div>
        <div className="slider-item-wrapper">
          <div className="slider-image-wrapper">
            <img className="slider-image" src={teamwork} alt="image2" />
          </div>
          <p className="caption">lorem ipsum dolor sit</p>
        </div>
        <div className="slider-item-wrapper">
          <div className="slider-image-wrapper">
            <img className="slider-image" src={teamwork} alt="image3" />
          </div>
          <p className="caption">lorem ipsum dolor sit</p>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
