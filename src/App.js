import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import FavList from "./components/FavList/FavList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
