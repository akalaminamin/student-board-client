import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../../layout/Input/Input";

const StudentForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const [image, setImage] = useState(null);
  const [students, setStudents] = useState({
    name: "",
    phone: "",
    address1: "",
    email: "",
    Class: "",
    address2: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudents({ ...students, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/student/${id}`).then((res) => {
      const data = res.data;
      const { name, phone, address1, email, Class, address2 } = res.data;
      setStudents({ name, phone, address1, email, Class, address2 });
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("students", students);
    // formData.append("image", image);

    if (id) {
      const { name, value } = e.target;
      setStudents({ ...students, [name]: value });
      axios.put(`http://localhost:5000/student/${id}`, students).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire("Update!", "Student Update successfull", "success");
          navigate("/");
        }
      });
    } else {
      axios.post("http://localhost:5000/student", students).then((res) => {
      if (res.data.acknowledged) {
          Swal.fire("Added!", "Student added successfull", "success");
          navigate("/");
        }
      });
    }
  };
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow p-4 py-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Input
                      type="text"
                      placeholder="Student Name"
                      handleChange={handleChange}
                      name="name"
                      defaultValue={id ? students.name : ""}
                    />
                    <Input
                      type="tel"
                      placeholder="Student Phone"
                      handleChange={handleChange}
                      name="phone"
                      defaultValue={id ? students.phone : ""}
                    />
                    <Input
                      type="text"
                      placeholder="Student Address Line 1"
                      handleChange={handleChange}
                      name="address1"
                      defaultValue={id ? students.address1 : ""}
                    />
                    <Input
                      type="file"
                      name="image"
                    />
                    <button
                      type="submit"
                      className="btn btn-danger d-block me-auto"
                    >
                      {id ? "Update Student" : "Add Student"}
                    </button>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Input
                      type="email"
                      placeholder="Student Email"
                      handleChange={handleChange}
                      name="email"
                      defaultValue={id ? students.email : ""}
                    />
                    <Input
                      type="text"
                      placeholder="Student Class"
                      handleChange={handleChange}
                      name="Class"
                      defaultValue={id ? students.Class : ""}
                    />
                    <Input
                      type="text"
                      placeholder="Student Address Line 2"
                      handleChange={handleChange}
                      name="address2"
                      defaultValue={id ? students.address2 : ""}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
