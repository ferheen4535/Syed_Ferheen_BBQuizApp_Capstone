// src/components/UserForm.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./UserForm.css";

/* API base */
const API = import.meta.env.VITE_API_URL || 'https://syed-ferheen-backendproductquizapp.onrender.com/';

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
    <div className="userform-container">
    <form onSubmit={handleSubmit}>
      <h2>Let's get to know you better first!</h2>
      

      <label>Name</label>
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

      {error && <p>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting…' : 'Start Quiz'}
      </button>
    </form>
  </div>
  );
}
