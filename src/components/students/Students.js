import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../layout/Avatar/Avatar";
import axios from "axios";
import Swal from "sweetalert2";

const Students = () => {
  const [student, setStudent] = useState([]);
  const [isDelete, setDelete] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/student")
      .then((res) => setStudent(res.data));
  }, [isDelete]);

  // Swal.fire({
  //   title: "Are you sure?",
  //   text: "You won't be able to revert this!",
  //   icon: "warning",
  //   showCancelButton: true,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Yes, delete it!",
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //   }
  // });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Confirm delete this student.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/student/${id}`).then((res) => {
          if (res.data.acknowledged) {
            setDelete(true);
            Swal.fire("Deleted!", "Student delete successfull", "success");
          } else {
            setDelete(false);
          }
        });
      }
    });
  };
  return (
    <div className="container">
      <div className="row gy-4 py-4">
        {student.map((item, index) => (
          <div className="col-md-3 col-lg-3 col-sm-6 col-12" key={item._id}>
            <div className="card shadow py-4 text-center">
              <Avatar url={`https://i.pravatar.cc/150?img=${index + 1}`} />
              <div className="card-body mb-4">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.email}</p>
                <Link
                  to={`/student/${item._id}`}
                  className="btn btn-danger btn-profile"
                >
                  View Profile
                </Link>
                <button
                  className="btn-edit"
                  onClick={() => handleDelete(item._id)}
                >
                  <span className="material-icons">delete_outline</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
