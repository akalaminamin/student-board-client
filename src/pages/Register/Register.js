import React, { useState } from "react";
import Input from "../../layout/Input/Input";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { name, email, password, confirmPassword } = user;
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const { signUpUser } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await signUpUser(email, password, name);
    } catch (e) {
      setLoading(false);
      setError("Failed to create an account");
      console.log(e.message);
    }
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
                  type="text"
                  placeholder="Name"
                  handleChange={handleChange}
                  name="name"
                />
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
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  handleChange={handleChange}
                  name="confirmPassword"
                />
                <Link
                  to="/login"
                  className="text-secondary fw-bold mb-3 d-block"
                >
                  Login Here
                </Link>
                <button
                  type="submit"
                  className="btn btn-dark w-100"
                  disabled={loading}
                >
                  Register
                </button>
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
