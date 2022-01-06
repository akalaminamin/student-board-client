import React from "react";
import banner from "../../assets/images/banner.jpg";
import CardContent from "../Home/CardContent";
function FoodItem({ searchText, loading }) {
  return (
    <div className="container my-4 text-center">
      <div className="my-5">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
          {!searchText?.length
            ? "sorry Data not found"
            : loading
            ? "loading..."
            : searchText.map((singleRecipe) => (
                <div className="col" key={singleRecipe._id}>
                  <div className="shadow-lg custom-card">
                    <div className="card-image">
                      <img src={banner} className="image" alt="..." />
                    </div>
                    <CardContent singleRecipe={singleRecipe} />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
