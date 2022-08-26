import { useState } from 'react';

import MobileMenu from '../mobile/mobilemenu';
import TabletNavbar from '../tablet/tabletnavbar';
import MobileNavBar from '../mobile/mobilenavbar';
import DesktopNavbar from '../desktop/desktopnavbar';
import useMediaQuery from '../../hooks/useMediaQuery';

import './header.css';

const Header = () => {
  const maxMobileWidth = useMediaQuery(480);
  const maxTabletWidth = useMediaQuery(768);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowSearchBar = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prevState) => !prevState);
  };

  return (
    <div className="header-wrapper">
      <header>
        {maxMobileWidth && (
          <MobileNavBar
            handleShowMobileMenu={handleShowMobileMenu}
            handleShowSearchBar={handleShowSearchBar}
            showSearchBar={showSearchBar}
            showMobileMenu={showMobileMenu}
          />
        )}
        {maxMobileWidth && showMobileMenu && <MobileMenu />}
        {maxTabletWidth && !maxMobileWidth && (
          <TabletNavbar handleShowSearchBar={handleShowSearchBar} showSearchBar={showSearchBar} />
        )}
        {!maxMobileWidth && !maxTabletWidth && (
          <DesktopNavbar showSearchBar={showSearchBar} handleShowSearchBar={handleShowSearchBar} />
        )}
        {showSearchBar && maxTabletWidth && (
          <form className="search-form">
            <input />
          </form>
        )}
      </header>
      <div className="header-bottom"></div>
    </div>
  );
};

export default Header;
