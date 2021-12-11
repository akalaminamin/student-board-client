import Students from "./components/students/Students";
import NavBar from "./layout/NavBar/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./components/students/Student";
import StudentForm from "./components/students/StudentForm";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          {/* <h1>In the name of Allah</h1> */}
            <NavBar />
            <Routes>
              <Route path="/" element={<Students />} />
              <Route path="/student/:id" element={<Student />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/studentForm" element={<StudentForm />} />
              <Route path="/studentForm/:id" element={<StudentForm />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
