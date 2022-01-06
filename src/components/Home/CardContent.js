import React from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const CardContent = ({ singleRecipe }) => {
  const navigate = useNavigate();
  const addFavourite = (singleRecipe) => {
    const { _id } = singleRecipe;
    singleRecipe.status = "favourite";
    axios
      .put(`http://localhost:5000/allFoodRecipe/${_id}`, singleRecipe)
      .then((res) => {
        if (res.status) {
          Swal.fire("Favourite!", "Your Favourite product", "success");
          //   window.location.reload();
          navigate("/");
        }
      });
  };
  const handleDetails = (id) => {
    navigate(`/profile/${id}`);
  };
  return (
    <>
      <div className="flex justify-content-between align-items-center card-content">
        <div>
          <h4 className="food-name">{singleRecipe?.recipeName}</h4>
          <p className="mb-0">{singleRecipe?.category}</p>
          <h6>
            <span>by</span> {singleRecipe?.author}
          </h6>
        </div>
        <div>
          <span className="favourite d-flex align-items-center flex-column">
            <span
              className="favourite-icon d-flex align-items-center justify-content-center "
              onClick={() => addFavourite(singleRecipe)}
            >
              {singleRecipe?.status === "favourite" ? (
                <BsSuitHeartFill />
              ) : (
                <BsSuitHeart />
              )}
            </span>
            <span className="share-icon">
              <FacebookShareButton
              //   url={shareUrl}
              //   quote={recipeName}
              //   hashtag={category}
              >
                <FacebookIcon size={40} />
              </FacebookShareButton>
            </span>
          </span>
        </div>
        <button
          className="btn btn-success"
          onClick={() => handleDetails(singleRecipe._id)}
        >
          See Details
        </button>
      </div>
    </>
  );
};

export default CardContent;
