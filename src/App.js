import Students from "./components/students/Students";
import NavBar from "./layout/NavBar/NavBar";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Student from "./components/students/Student";
import StudentForm from "./components/students/StudentForm";

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
              <Route path="/studentForm" element={<StudentForm />} />
              <Route path="/studentForm/:id" element={<StudentForm />} />
            </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
