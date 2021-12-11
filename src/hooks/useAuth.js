import { useContext } from "react";
import { AuthContexts } from "../context/AuthContext";
const useAuth = () => {
  return useContext(AuthContexts);
};
export default useAuth; 
