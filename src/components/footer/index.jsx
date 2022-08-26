import { Link } from 'react-router-dom';
import { IoIosMail } from 'react-icons/io';
import { CgFacebook } from 'react-icons/cg';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

import MenuLinks from '../menulinks';

import './footer.css';

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="footer">
      <ul className="social">
        <Link to="https://www.facebook.com/" className="social-item contentlink">
          <CgFacebook />
        </Link>
        <Link to="https://www.twitter.com/" className="social-item contentlink">
          <AiOutlineTwitter />
        </Link>
        <Link to="https://www.google.com/" className="social-item contentlink">
          <IoIosMail />
        </Link>
      </ul>
      <MenuLinks isHeader={false} />
      <button className="go-top-button" onClick={goToTop}>
        <FaLongArrowAltUp />
      </button>
    </div>
  );
};

export default Footer;
