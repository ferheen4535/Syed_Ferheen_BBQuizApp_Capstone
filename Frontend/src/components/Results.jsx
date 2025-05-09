import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

export const createUser = async (userData) => {
  const res = await axios.post(`${API}/users`, userData);
  return res.data;
};
//----------API---------//

import React from 'react'

export default function Results() {
  return (
    <div>
      <h1>This is the Results section</h1>
    </div>
  )
}
