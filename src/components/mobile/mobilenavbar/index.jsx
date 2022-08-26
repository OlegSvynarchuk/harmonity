import classNames from 'classnames';
import { GiHamburgerMenu } from 'react-icons/gi';

import SearchButton from '../../searchbutton';
import useMediaQuery from '../../../hooks/useMediaQuery';

import './mobilenavbar.css';

const MobileNavBar = ({ handleShowMobileMenu, handleShowSearchBar, showSearchBar, showMobileMenu }) => {
  const maxMobileWidth = useMediaQuery(480);
  const mobileMenuButtonClasses = classNames({
    'navbar-button': true,
    'navbar-button-active': showMobileMenu,
  });

  return (
    <div>
      <nav className="mobile-navbar">
        {maxMobileWidth && (
          <button className={mobileMenuButtonClasses}>
            <GiHamburgerMenu onClick={handleShowMobileMenu} />
          </button>
        )}
        <SearchButton handleShowSearchBar={handleShowSearchBar} showSearchBar={showSearchBar} />
      </nav>
    </div>
  );
};

export default MobileNavBar;
