import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindYourBook from "./pages/FindYourBook";
import Navbar from "./components/Navbar";
import LogIn from "./pages/LogIn";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findyourbook" element={<FindYourBook />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
