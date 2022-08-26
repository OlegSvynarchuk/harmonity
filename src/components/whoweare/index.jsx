import { Link } from 'react-router-dom';
import SectionTitle from '../sectiontitle';

import image1 from './images/whoweare1.jpg';
import image2 from './images/whoweare2.jpg';

import './whoweare.css';

const WhoWeAre = () => {
  return (
    <section className="whoweare-section">
      <SectionTitle text={'who we are'} />
      <div className="cards">
        <div className="card-wrapper">
          <div className="image-wrapper">
            <img className="card-image" src={image1} alt="card" />
          </div>
          <div className="card-info">
            <h4 className="card-title">Lorem ipsum</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore.
            </p>
          </div>
          <Link to="/showmore1" className="card-link">
            show more
          </Link>
        </div>
        <div className="card-wrapper">
          <div className="image-wrapper">
            <img className="card-image" src={image2} alt="card" />
          </div>
          <div className="card-info">
            <h4 className="card-title">Lorem ipsum</h4>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore.
            </p>
          </div>
          <Link to="/showmore2" className="card-link">
            show more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
