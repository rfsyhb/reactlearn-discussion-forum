import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginForm({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="input-login">
      <label htmlFor="email">
        E-Mail
        <input
          type="text"
          id="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
        />
      </label>
      <button type="button" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
