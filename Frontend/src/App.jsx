import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Footer from "./components/Footer.jsx";
import UserForm from "./components/UserForm";
import Quiz from "./components/Quiz.jsx"; 
import { jsQuiz } from "./constants";
import "./App.css";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  return (
    <div className="App">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/userform" element={<UserForm />} />
    
          <Route path="/quiz" element={<Quiz questions={jsQuiz.questions} />} 
          />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;