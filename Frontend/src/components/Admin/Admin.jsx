import { Link } from 'react-router-dom';
import "./Admin.css";

export default function Admin() {
  const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin ({adminEmail})</p>

      <div className="admin-actions">
        
        <ul>
          <li>
            <Link to="/profile">Update Usernames</Link>
          </li>
          <li>
            <Link to="/unsubscribe">Delete Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}