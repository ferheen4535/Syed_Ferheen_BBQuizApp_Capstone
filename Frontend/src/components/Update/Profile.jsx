import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Profile.css";

const API = import.meta.env.VITE_API_URL || 'http://localhost:5055';

export default function Profile() {

  const [updateData, setUpdateData] = useState({  //state variable for form update//
    username: '',
    email: '',
    newUsername: ''
  });
  const [updating, setUpdating] = useState(false); // shows if its currently updated//
  const [updateMsg, setUpdateMsg] = useState('');  //success or error message//


  const [submitting, setSubmitting] = useState(false);
  const [subMsg, setSubMsg] = useState('');


  const onUpdateChange = e =>  //handlers for typing in the forms//
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });

  
  const handleUpdate = async e => {    //submitting the update//
    e.preventDefault();
    setUpdating(true);
    setUpdateMsg('');

    try {
      await axios.put(`${API}/quiz/users/update`, updateData);
      setUpdateMsg('Username updated!');
    } catch (err) {
      console.error(err);
      setUpdateMsg(
        err.response?.data?.error ? err.response.data.error : 'Update failed.'
      );
    } finally {
      setUpdating(false);
    }
  };


 
  //html formating /
  return (
    <div className="profile-wrapper">
    
      <h2>Update Username</h2>
      <form onSubmit={handleUpdate} className="profile-form">
        <label>Current username</label>
        <input
          name="username"
          value={updateData.username}
          onChange={onUpdateChange}
          required
        />

        <label>Email on file</label>
        <input
          name="email"
          type="email"
          value={updateData.email}
          onChange={onUpdateChange}
          required
        />

        <label>New username</label>
        <input
          name="newUsername"
          value={updateData.newUsername}
          onChange={onUpdateChange}
          required
        />

        <button type="submit" disabled={updating}>
          {updating ? 'Updating…' : 'Update'}
        </button>
      </form>
      {updateMsg && <p>{updateMsg}</p>}

      <br/>

    <div> <Link to="/unsubscribe">Delete Users</Link> </div>

    </div>
  );
}

