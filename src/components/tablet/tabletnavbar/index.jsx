import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { GiGraduateCap } from 'react-icons/gi';
import { HiQuestionMarkCircle } from 'react-icons/hi';

import SearchButton from '../../searchbutton';

import './tabletnavbar.css';

const TabletNavbar = ({ handleShowSearchBar, showSearchBar }) => {
  const icons = [
    { id: 'home', icon: <MdHome /> },
    { id: 'questionmark', icon: <HiQuestionMarkCircle /> },
    { id: 'education', icon: <GiGraduateCap /> },
    { id: 'mail', icon: <IoIosMail /> },
  ];

  return (
    <nav className="tablet-navbar">
      <ul className="tablet-navbar-icons-list">
        {icons.map((item) => {
          return (
            <li key={item.id} className="tablet-navbar-icon menulink">
              <Link to={`/${item.id}`}>{item.icon}</Link>
            </li>
          );
        })}
      </ul>
      <div>
        <SearchButton handleShowSearchBar={handleShowSearchBar} showSearchBar={showSearchBar} />
      </div>
    </nav>
  );
};

export default TabletNavbar;
