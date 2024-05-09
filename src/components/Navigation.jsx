import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navigation({ authUser, logout }) {
  if (authUser === null) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <p>Hallo {authUser.name}</p>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/leaderboards">Leaderboards</Link>
        </li>
        <li>
          <button
            type="button"
            onClick={logout}
            className="button-logout"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
