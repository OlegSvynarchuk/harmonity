import { Link } from 'react-router-dom';
import './mobilemenu.css';

const MobileMenu = () => {
  const titles = ['home', 'about us', 'our work', 'contact'];
  const backgrounds = ['#bbd547', '#81b36d', '#418f99', '#1375b7'];

  return (
    <menu className="mobile-menu">
      {titles.map((title, index) => {
        return (
          <Link
            key={title}
            to={`/${title}`}
            style={{ background: backgrounds[index] }}
            className="mobile-menu-item"
          >
            {title}
          </Link>
        );
      })}
    </menu>
  );
};

export default MobileMenu;
