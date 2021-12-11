import React, { useState } from "react";
import Input from "../../layout/Input/Input";
import { Link } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(user);
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-7 mx-auto">
            <div className="card card-body shadow p-4 py-5">
              <form action="" onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Email"
                  handleChange={handleChange}
                  name="email"
                />
                <Input
                  type="password"
                  placeholder="password"
                  handleChange={handleChange}
                  name="password"
                />
                <Link
                  to="/register"
                  className="text-secondary fw-bold mb-3 d-block"
                >
                  Create an account
                </Link>
                <button type="submit" className="btn btn-dark w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
