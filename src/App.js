import NavBar from "./layout/NavBar/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import AddRecipe from "./pages/AddRecipe/AddRecipe";
import Food from "./pages/Food/Food";
import Favourites from "./pages/Favourites/Favourites";
// import Login from "./pages/Login/Login";
// import Register from "./pages/Register/Register";
// IN THE NAME OF ALLAH
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/addRecipe" element={<AddRecipe />} />
            <Route path="/addRecipe/:id" element={<AddRecipe />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/favourites" element={<Favourites />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
