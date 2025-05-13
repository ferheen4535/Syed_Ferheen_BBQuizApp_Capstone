// src/components/UserForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

/* API base */
const API = import.meta.env.VITE_API_URL || 'http://localhost:5055';

/* helper */
const createUser = async (userData) =>
  (await axios.post(`${API}/quiz/users`, userData)).data;

export default function UserForm() {
  const navigate = useNavigate();

  /* form state */
  const [formData, setFormData] = useState({ username: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const user = await createUser({
        username: formData.username,   // ✅ correct key
        email:    formData.email,
      });
      console.log('User created:', user);
      localStorage.setItem('userId', user._id); // optional
      navigate('/quiz');
    } catch (err) {
      console.error(err);
      setError('Failed to create user. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>User Info</h2>

        <label>Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Start Quiz'}
        </button>
      </form>
    </div>
  );
}
