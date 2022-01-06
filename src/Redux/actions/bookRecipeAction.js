import {
  REQUEST_LOADING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from "../constants/type";
import axios from "axios";

const bookRecipeAction = () => async (dispatch) => {
  try {
    dispatch({
      type: REQUEST_LOADING,
    });
    const res = await axios.get("http://localhost:5000/allFoodRecipe");
    dispatch({
      type: REQUEST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_FAILED,
      payload: error.message,
    });
  }
};

export default bookRecipeAction;
