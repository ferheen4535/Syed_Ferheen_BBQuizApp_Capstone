import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//-------------API base URL--------//
const API = import.meta.env.VITE_API_URL;

//-------function to create user--------//  might be the issue, axios warning///
const createUser = async (userData) => {
  const res = await axios.post(`${API}/quiz/users`, userData);
  return res.data;
};

export default function UserForm() {
  const navigate = useNavigate();

  //------input form info on page---------// works ///
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  //---useState for Loading and error catching---///
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //-----Input change handler----------//
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler  //
  const handleStart = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const user = await createUser({
        name: formData.username,
        email: formData.email,
      });
      console.log("User created:", user);
      navigate("/quiz");
    } catch (err) {
      console.error("Error creating user:", err);
      setError("Failed to create user. Try again.");
    } finally {
      setLoading(false);
    }
  };
  //---------------form html design-----------//
  return (
    <div>
      <form onSubmit={handleStart}>
        <h2>User Info</h2>

        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Start Quiz"}
        </button>
      </form>
    </div>
  );
}


//source

//How To Make Sign In & Sign Up Form Using React JS | ReactJS Login & Registration Form
//https://www.youtube.com/watch?v=8QgQKRcAUvM

//https://stackoverflow.com/questions/71262407/login-page-with-either-username-or-email-using-react

//https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/email
