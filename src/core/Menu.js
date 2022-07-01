import { Link, useLocation } from 'react-router-dom';

const MenuItem = ({ title, to, className }) => (
  <li className="nav-item">
    <Link className={`nav-link ${className}`} to={to}>
      {title}
    </Link>
  </li>
);

const Menu = () => {
  let location = useLocation();
  console.log('location', location.pathname);
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <MenuItem
          title="Home"
          to="/"
          className={location.pathname === '/' ? 'text-white' : 'text-info'}
        />
        <MenuItem
          title="Cart"
          to="/cart"
          className={location.pathname === '/cart' ? 'text-white' : 'text-info'}
        />
        <MenuItem
          title="Dashboard"
          to="/user/dashboard"
          className={
            location.pathname === '/user/dashboard' ? 'text-white' : 'text-info'
          }
        />
        <MenuItem
          title="A. Dashboard"
          to="/admin/dashboard"
          className={
            location.pathname === '/admin/dashboard'
              ? 'text-white'
              : 'text-info'
          }
        />
        <MenuItem
          title="Signup"
          to="/signup"
          className={
            location.pathname === '/signup' ? 'text-white' : 'text-info'
          }
        />
        <MenuItem
          title="Sign In"
          to="/signin"
          className={
            location.pathname === '/signin' ? 'text-white' : 'text-info'
          }
        />
        <MenuItem
          title="Sign Out"
          to="/signout"
          className={
            location.pathname === '/signout' ? 'text-white' : 'text-info'
          }
        />
      </ul>
    </div>
  );
};

export default Menu;
