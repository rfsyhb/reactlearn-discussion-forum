import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="input-register">
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
      </label>
      <label htmlFor="email">
        E-Mail
        <input
          type="text"
          id="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Username"
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
      <button type="button" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};
