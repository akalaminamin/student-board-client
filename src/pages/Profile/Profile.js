import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Avatar from "../../layout/Avatar/Avatar";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roodRecipe, setFoodRecipe] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/allFoodRecipe/${id}`).then((res) => {
      setFoodRecipe(res.data);
    });
  }, [id]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/allFoodRecipe/${id}`).then((res) => {
      if (res.status) {
        Swal.fire("Deleted!", "Delete successfull", "success");
        navigate("/");
      }
    });
  };
  return (
    <div className="background">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <Avatar url={`https://i.pravatar.cc/150?img=5}`} />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-start">
                    <ul className="list-group">
                      <li className="list-group-item d-flex align-items-center justify-content-between">
                        <h3 className="mb-0 text-uppercase">
                          {roodRecipe?.name}
                        </h3>
                        <div>
                          <Link
                            to={`/addRecipe/${id}`}
                            className="btn btn-primary me-2"
                          >
                            Edit Profile
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(id)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                      <li className="list-group-item">
                        <p>
                          <span className="fw-bold">Name: </span>
                          {roodRecipe.name}
                        </p>
                        <p>
                          <span className="fw-bold">Email: </span>
                          {roodRecipe.email}
                        </p>
                        <p>
                          <span className="fw-bold">Recipe Name: </span>
                          {roodRecipe.recipeName}
                        </p>
                        <p>
                          <span className="fw-bold">Category: </span>
                          {roodRecipe.category}
                        </p>
                        <p>
                          <span className="fw-bold">Author: </span>
                          {roodRecipe.author}
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
    </div>
  );
};

export default Profile;
