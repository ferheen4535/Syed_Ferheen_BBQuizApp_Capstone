import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h4>Badmaash Beards</h4>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/UserForm">Quiz</NavLink>
      <NavLink to="/ProductPage">Products</NavLink>
    </div>
  </nav>
);

export default Navbar;












// import React from 'react'


// export default function Nav (props) {
//   return (
//     <div className="nav">
     
//         <div>CRYPTO PRICES</div>
      
//         <div>CURRENCIES</div>
      
//     </div>
//   );
// }