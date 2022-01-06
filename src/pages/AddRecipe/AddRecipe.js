import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Input from "../../layout/Input/Input";
import { Form } from "react-bootstrap";
const AddRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const [bookRecpies, setBookRecpies] = useState({
    name: "",
    email: "",
    recipeName: "",
    cusine: "",
    category: "",
    author: "",
    method: "",
    ingredients: "",
    method: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookRecpies({ ...bookRecpies, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/allFoodRecipe/${id}`).then((res) => {
      const {
        name,
        email,
        recipeName,
        cusine,
        category,
        author,
        ingredients,
        method,
        image,
      } = res.data;
      setBookRecpies({
        name,
        email,
        recipeName,
        cusine,
        category,
        author,
        ingredients,
        method,
      });
    });
  }, [id]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const { name, value } = e.target;
      setBookRecpies({ ...bookRecpies, [name]: value });
      axios
        .put(`http://localhost:5000/allFoodRecipe/${id}`, bookRecpies)
        .then((res) => {
          if (res.status) {
            Swal.fire("Update!", "Food Update successfull", "success");
            navigate("/");
          }
        });
    } else {
      axios
        .post("http://localhost:5000/allFoodRecipe", bookRecpies)
        .then((res) => {
          if (res.status) {
            Swal.fire("Added!", "Food added successfull", "success");
            // navigate("/");
            window.location.reload();
          }
        });
    }
  };
  return (
    <div className="background">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow p-4 py-5">
              <h3 className="mb-4 text-uppercase">Add Recipe</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <Input
                      type="text"
                      placeholder="Name"
                      handleChange={handleChange}
                      name="name"
                      defaultValue={id ? bookRecpies.name : ""}
                    />
                    <Input
                      type="tel"
                      placeholder="Email"
                      handleChange={handleChange}
                      name="email"
                      defaultValue={id ? bookRecpies.email : ""}
                    />
                    <Input
                      type="text"
                      placeholder="Recipe Name"
                      handleChange={handleChange}
                      name="recipeName"
                      defaultValue={id ? bookRecpies.recipeName : ""}
                    />
                    <input
                      accept="image/*"
                      type="file"
                      as="text"
                      size="sm"
                      name="image"
                      className="form-control mb-2"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    <Form.Control
                      placeholder="Ingredients"
                      className="mb-2"
                      name="ingredients"
                      onChange={handleChange}
                      defaultValue={id ? bookRecpies.ingredients : ""}
                      required
                      as="textarea"
                      rows={5}
                    />
                    <button
                      type="submit"
                      className="btn btn-danger d-block me-auto"
                    >
                      {id ? "Update Recipe" : "Add Recipe"}
                    </button>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <Input
                      type="text"
                      placeholder="cusine"
                      handleChange={handleChange}
                      name="cusine"
                      defaultValue={id ? bookRecpies.cusine : ""}
                    />
                    <select
                      name="category"
                      className="form-select mb-4"
                      onChange={handleChange}
                      defaultChecked={id ? bookRecpies.category : null}
                      required
                    >
                      <option>Select</option>
                      <option value="vagan">vagan</option>
                      <option value="diet">diet</option>
                      <option value="dessert">dessert</option>
                      <option value="cookies">cookies</option>
                      <option value="fastfood">fastfood</option>
                      <option value="drinks">drinks</option>
                      <option value="Meat">Meat</option>
                    </select>
                    <Input
                      type="text"
                      placeholder="Author"
                      handleChange={handleChange}
                      name="author"
                      defaultValue={id ? bookRecpies.author : ""}
                    />
                    <Form.Control
                      placeholder="Method"
                      name="method"
                      onChange={handleChange}
                      defaultValue={id ? bookRecpies.method : ""}
                      required
                      as="textarea"
                      rows={7}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
