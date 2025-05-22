import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./Unsubscribe.css";

const API = import.meta.env.VITE_API_URL || 'http://localhost:5055';

export default function Unsubscribe() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get(`${API}/quiz/users`);
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    if (confirm('Are you sure you want to unsubscribe this user?')) {
      await axios.delete(`${API}/quiz/users/${id}`);
      fetchUsers();
    }
  };

  return (
    <div className="unsubscribe-container">
      <h2>Delete Users</h2>
      <div className="unsubscribe-table-wrapper">
        <table className="unsubscribe-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="unsubscribe-delete-btn"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="link"> <Link to="/Profile">Update Users</Link> </div>
    </div>
  );
}
