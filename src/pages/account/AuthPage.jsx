import React, { useState } from 'react';
import '../../styles/pages/_authpage.scss';

const AuthForm = () => {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleModeChange = newMode => {
    setMode(newMode);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Perform validation and submit data to the server
    if (mode === 'login') {
      // Login logic
      console.log('Logging in...');
      console.log('Username:', username);
      console.log('Password:', password);
    } else {
      // Register logic
      console.log('Registering...');
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Re-enter Password:', reenterPassword);
      console.log('Address:', address);
      console.log('Phone Number:', phoneNumber);
    }

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setReenterPassword('');
    setAddress('');
    setPhoneNumber('');
  };

  return (
    <div className='auth-form'>
      <h2>{mode === 'login' ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        {mode === 'register' && (
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
        )}

        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        {mode === 'register' && (
          <div>
            <label htmlFor='reenterPassword'>Re-enter Password:</label>
            <input
              type='password'
              id='reenterPassword'
              value={reenterPassword}
              onChange={e => setReenterPassword(e.target.value)}
              required
            />
          </div>
        )}

        {mode === 'register' && (
          <div>
            <label htmlFor='address'>Address:</label>
            <input
              type='text'
              id='address'
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
            />
          </div>
        )}

        {mode === 'register' && (
          <div>
            <label htmlFor='phoneNumber'>Phone Number:</label>
            <input
              type='tel'
              id='phoneNumber'
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        )}

        <button type='submit'>{mode === 'login' ? 'Login' : 'Register'}</button>
      </form>

      <div>
        {mode === 'login' ? (
          <p>
            Don't have an account?{' '}
            <button onClick={() => handleModeChange('register')}>
              Register
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button onClick={() => handleModeChange('login')}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
