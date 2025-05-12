import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [signInData, setSignInData] = useState({ username: '', email: '' });
  const [unsubscribeData, setUnsubscribeData] = useState({ username: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleUnsubscribeChange = (e) => {
    setUnsubscribeData({ ...unsubscribeData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5055/quiz/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signInData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error signing in');

      console.log('User signed in:', data);
      navigate('');  ///I dont have a account page setup//
    } catch (err) {
      console.error('Sign-in error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();

    if (confirm('Are you sure you want to delete your profile? This cannot be undone.')) {
      try {
        const response = await fetch('http://localhost:5055/quiz/users/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(unsubscribeData),
        });

        if (!response.ok) throw new Error('Failed to unsubscribe');
        alert('Your profile has been deleted.');
        navigate('/');
      } catch (err) {
        console.error('Unsubscribe error:', err);
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="profile-page">
      <div className="form-section">
        <h2>Sign In</h2>
        <form onSubmit={handleSignIn}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={signInData.username}
            onChange={handleSignInChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={signInData.email}
            onChange={handleSignInChange}
            required
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" disabled={loading}>
            {loading ? 'Submitting...' : 'Sign in'}
          </button>
        </form>
      </div>

      <div className="form-section">
        <h2>Unsubscribe</h2>
        <form onSubmit={handleUnsubscribe}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={unsubscribeData.username}
            onChange={handleUnsubscribeChange}
            required
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={unsubscribeData.email}
            onChange={handleUnsubscribeChange}
            required
          />
          <button type="submit">Unsubscribe</button>
        </form>
      </div>
    </div>
  );
}
