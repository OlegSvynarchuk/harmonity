import classNames from 'classnames';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchButton = ({ handleShowSearchBar, showSearchBar }) => {
  const searchButtonClasses = classNames({
    'navbar-button': true,
    'navbar-button-active': showSearchBar,
  });
  return (
    <button className={searchButtonClasses} onClick={handleShowSearchBar}>
      <AiOutlineSearch />
    </button>
  );
};

export default SearchButton;
