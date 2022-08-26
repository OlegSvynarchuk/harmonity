import MenuLinks from '../../menulinks';
import SearchButton from '../../searchbutton';

import './desktopnavbar.css';

const DesktopNavbar = ({ showSearchBar, handleShowSearchBar }) => {
  return (
    <div className="desktop-navbar">
      <MenuLinks isHeader={true} />
      <SearchButton handleShowSearchBar={handleShowSearchBar} showSearchBar={showSearchBar} />
    </div>
  );
};

export default DesktopNavbar;
