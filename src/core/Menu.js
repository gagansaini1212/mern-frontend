import { Link, useLocation, useNavigate } from 'react-router-dom';

import { signout, isAuthenticated } from '../auth/helper';

const MenuItem = ({ title, to, className }) => (
  <li className="nav-item">
    <Link className={`nav-link ${className}`} to={to}>
      {title}
    </Link>
  </li>
);

const Menu = () => {
  const navigate = useNavigate();
  let location = useLocation();
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
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              onClick={() => {
                signout(() => {
                  navigate('/');
                });
              }}
              className="nav-link text-warning"
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
