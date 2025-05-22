import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Footer from "./components/Footer/Footer.jsx";
import UserForm from "./components/UserForm/UserForm.jsx";
import QuizSection from "./components/QuizSection/QuizSection.jsx";
import Results from "./components/Results/Results.jsx";
import Banner from "./components/Banner/Banner.jsx"
import Profile from "./components/Update/Profile.jsx";
import Products from "./components/Products/Products.jsx";
import Unsubscribe from "./components/Delete/Unsubscribe.jsx";
import AdminLogin from "./components/AdminLogin/AdminLogin.jsx";

import Admin from "./components/Admin/Admin.jsx";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-border">
          <Navbar />
          <Banner />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path="/quiz" element={<QuizSection />} />
            <Route path="/results/:resultId" element={<Results />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} />

          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}
