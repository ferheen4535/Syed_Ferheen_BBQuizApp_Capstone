import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();

    if (confirm('Are you sure you want to delete your profile? This cannot be undone.')) {
      try {
        await fetch('/api/users/delete', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        alert('Your profile has been deleted.');
        navigate('/');
      } catch (err) {
        console.error('Error:', err);
        alert('Something went wrong while trying to delete your account.');
      }
    }
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <form onSubmit={handleUnsubscribe} className="profile-form">
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="unsubscribe-button">
          Unsubscribe
        </button>
      </form>
    </div>
  );
}
