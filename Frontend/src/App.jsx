import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Footer from "./components/Footer.jsx";
import UserForm from "./components/UserForm";
import QuizSection from "./components/QuizSection.jsx";
import Results from "./components/Results.jsx";
import Banner from "./components/Banner.jsx";
import Profile from "./components/Profile.jsx";
import Products from "./components/Products.jsx";
import "./App.css";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
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
          <Route path="/results/:id" element={<Results />} />
         <Route path="/banner" element={<Banner />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
        </div>
        </div>
        </div>
  );
}

export default App;




// sources///

// https://wpdean.com/bootstrap-navbar/  //
// https://www.geeksforgeeks.org/how-to-make-responsive-navbar-menu-in-css/  //
// https://cssgradient.io/  //