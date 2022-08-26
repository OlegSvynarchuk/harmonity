import { Link } from 'react-router-dom';
import { GoClock } from 'react-icons/go';
import { SiIcloud } from 'react-icons/si';
import { GiHearts } from 'react-icons/gi';
import { BsCalculatorFill } from 'react-icons/bs';

import SectionTitle from '../sectiontitle';

import './whatwedo.css';

const WhatWeDo = () => {
  const linksList = [
    { title: 'calculator', icon: <BsCalculatorFill /> },
    { title: 'cloud', icon: <SiIcloud /> },
    { title: 'clock', icon: <GoClock /> },
    { title: 'hear', icon: <GiHearts /> },
  ];

  return (
    <div className="icons-section">
      <SectionTitle text={'what we do'} />
      <div className="whatwedo-list">
        {linksList.map((link) => {
          return (
            <Link key={link.title} className="whatwedo-item contentlink" to={`/${link.title}`}>
              {link.icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
