import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

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
      <p>
        Hallo&nbsp;
        {authUser.name}
      </p>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Button
            variant="outlined"
            type="button"
            onClick={logout}
            className="button-logout"
          >
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
