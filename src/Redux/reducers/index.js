import { combineReducers } from "redux";
import bookRecipeReducer from "./bookRecipeReducer";
const rootReducer = combineReducers({
  bookRecipe: bookRecipeReducer,
});

export default rootReducer;
