import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginForm({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="login-input">
      <label htmlFor="email">E-Mail</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Username"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Password"
      />
      <button type="button" onClick={() => login({ email, password })}>
        Login
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
