import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './menulinks.css';

const MenuLinks = ({ isHeader }) => {
  const slash = <div className="slash">/</div>;
  const linksTitles = ['home', 'about us', 'our work', 'contact'];
  const linksListClasses = classNames({
    'links-list': true,
    'header-links-list': isHeader,
  });

  const linkItemClassnames = classNames({
    'menulink': true,
    'links-list-item': true,
    'footer-link-item': !isHeader,
    'header-link-item': isHeader,
  });
  return (
    <ul className={linksListClasses}>
      {linksTitles.map((link, index, arr) => {
        return (
          <li key={link} className={linkItemClassnames}>
            <Link to={`/${link}`}>{link}</Link>
            {isHeader && index !== arr.length - 1 && slash}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
