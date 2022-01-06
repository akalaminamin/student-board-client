import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import bookRecipeAction from "../../Redux/actions/bookRecipeAction";
import FoodItem from "../../components/Home/FoodItem";
function Food() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState([]);
  const { bookRecipe, loading, error } = useSelector(
    (state) => state.bookRecipe
  );
  useEffect(() => {
    dispatch(bookRecipeAction());
    setSearchText(bookRecipe);
  }, []);
  const handleFilter = (e) => {
    const { value } = e.target;
    const matchedFoods = bookRecipe.filter((food) =>
      food?.recipeName?.toLowerCase().includes(value.toLowerCase())
    );
    setSearchText(matchedFoods);
  };
  const handleChange = (e) => {
    const { value } = e.target;
    const matchedFoods = bookRecipe.filter((food) =>
      food?.category?.toLowerCase().includes(value.toLowerCase() || searchText)
    );
    setSearchText(matchedFoods);
    if (!matchedFoods.length) {
      setSearchText(bookRecipe);
    }
  };
  console.log(searchText)
  return (
    <div className="container my-4 text-center">
      <h3>Search Food!!</h3>
      <div className="grid ">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              className="form-control w-75 mx-auto shadow"
              placeholder="search food"
              onChange={handleFilter}
            />
          </div>
          <div className="col-4">
            <select
              name="category"
              className="form-select mb-4 w-75 shadow"
              onChange={handleChange}
              required
            >
              <option value="select">Select</option>
              <option value="vagan">vagan</option>
              <option value="diet">diet</option>
              <option value="dessert">dessert</option>
              <option value="cookies">cookies</option>
              <option value="fastfood">fastfood</option>
              <option value="drinks">drinks</option>
              <option value="Meat">Meat</option>
            </select>
          </div>
        </div>
      </div>
      <FoodItem searchText={searchText} loading={loading} error={error} />
    </div>
  );
}

export default Food;
