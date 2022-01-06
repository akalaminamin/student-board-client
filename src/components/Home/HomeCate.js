import React, { useEffect } from "react";
import cardImg from "../../assets/images/card-img.jpg";
import banner from "../../assets/images/banner.jpg";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { useSelector, useDispatch } from "react-redux";
import bookRecipeAction from "../../Redux/actions/bookRecipeAction";
const HomeCate = () => {
  // const shareUrl = `https://recipe-book-51ad3.web.app/food/details/${_id}`;
  const dispatch = useDispatch();
  const { bookRecipe, loading, error } = useSelector(
    (state) => state.bookRecipe
  );

  useEffect(() => {
    dispatch(bookRecipeAction());
  }, []);
  const storeCategory = [];
  const diet = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "diet"
  );
  const fastfood = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "fastfood"
  );
  const vagan = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "vagan"
  );
  const drinks = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "drinks"
  );
  const meat = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "meat"
  );
  const cookies = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "cookies"
  );
  const dessert = bookRecipe.filter(
    (SingleFood) => SingleFood.category === "cookies"
  );
  storeCategory.push(diet, fastfood, vagan, drinks, meat, cookies, dessert);
  // console.log(storeCategory);

  return (
    <>
      <div className="my-5">
        {/* <h2 className="category-title mb-4">{matchCate.category}</h2> */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
          {storeCategory.map((category) =>
            category.slice(0, 4).map((matchCate) => (
              <div className="col">
                <div className="shadow-lg custom-card">
                  <div className="card-image">
                    <img src={banner} className="image" alt="..." />
                  </div>
                  <div className="flex justify-content-between align-items-center card-content">
                    <div>
                      <h4 className="food-name">{matchCate.name}</h4>
                      <p className="mb-0">{matchCate.category} </p>
                      <h6>
                        <span>by</span> {matchCate.category}
                      </h6>
                    </div>
                    <div>
                      <span className="favourite d-flex align-items-center flex-column">
                        <span className="favourite-icon d-flex align-items-center justify-content-center">
                          <BsSuitHeart />
                        </span>
                        <FacebookShareButton
                        //   url={shareUrl}
                        //   quote={recipeName}
                        //   hashtag={category}
                        >
                          <FacebookIcon size={40} />
                        </FacebookShareButton>
                      </span>
                    </div>
                    <button className="btn btn-success">See Details</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HomeCate;
