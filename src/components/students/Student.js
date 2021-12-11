import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Avatar from "../../layout/Avatar/Avatar";
import axios from "axios";
const Student = () => {
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  const { name, email, Class, address1, address2, phone } = student;
  useEffect(() => {
    axios.get(`http://localhost:5000/student/${id}`).then((res) => {
      setStudent(res.data);
    });
  }, [id]);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <Avatar
                    url={`https://i.pravatar.cc/150?img=5}`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <ul className="list-group">
                      <li className="list-group-item d-flex align-items-center justify-content-between">
                        <h3 className="mb-0 text-uppercase">{name}</h3>
                        <Link
                          to={`/studentForm/${id}`}
                          className="btn btn-danger"
                        >
                          Edit Profile
                        </Link>
                      </li>
                      <li className="list-group-item">
                        <p>
                          <span className="fw-bold">Email:</span> {email}
                        </p>
                        <p>
                          <span className="fw-bold">Phone:</span> {phone}
                        </p>
                        <p>
                          <span className="fw-bold">Class:</span> {Class}
                        </p>
                        <p>
                          <span className="fw-bold">Address 1:</span> {address1}
                        </p>
                        <p>
                          <span className="fw-bold">Address 2:</span> {address2}
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
