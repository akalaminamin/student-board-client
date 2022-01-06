import React, { useEffect, useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { FacebookShareButton, FacebookIcon } from "react-share";
import banner from "../../assets/images/banner.jpg";
import { useSelector, useDispatch } from "react-redux";
import bookRecipeAction from "../../Redux/actions/bookRecipeAction";
function Favourite() {
  const dispatch = useDispatch();
  const { bookRecipe, loading, error } = useSelector(
    (state) => state.bookRecipe
  );
  useEffect(() => {
    dispatch(bookRecipeAction());
  }, []);
  const matchData = bookRecipe.filter(
    (matchStatus) => matchStatus.status === "favourite"
  );
  return (
    <div className="container my-4 text-center">
      <div className="my-5">
        <h2 className="text-center mb-5">Your All Favourite Food</h2>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
          {loading
            ? "loading..."
            : matchData.map((singleRecipe) => (
                <div className="col" key={singleRecipe._id}>
                  <div className="shadow-lg custom-card">
                    <div className="card-image">
                      <img src={banner} className="image" alt="..." />
                    </div>
                    <div className="flex justify-content-between align-items-center card-content">
                      <div>
                        <h4 className="food-name">{singleRecipe.recipeName}</h4>
                        <p className="mb-0">{singleRecipe.category}</p>
                        <h6>
                          <span>by</span> {singleRecipe.author}
                        </h6>
                      </div>
                      {/* <div>
                        <span className="favourite d-flex align-items-center flex-column">
                          <span
                            className="favourite-icon d-flex align-items-center justify-content-center"
                            onClick={() => addFavourite(singleRecipe)}
                          >
                            {singleRecipe?.status === "favourite" ? (
                              <BsSuitHeartFill />
                            ) : (
                              <BsSuitHeart />
                            )}
                          </span>
                          <FacebookShareButton
                          //   url={shareUrl}
                          //   quote={recipeName}
                          //   hashtag={category}
                          >
                            <FacebookIcon size={40} />
                          </FacebookShareButton>
                        </span>
                      </div> */}
                      {/* <button
                        className="btn btn-success"
                        onClick={() => handleDetails(singleRecipe._id)}
                      >
                        See Details
                      </button> */}
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Favourite;
