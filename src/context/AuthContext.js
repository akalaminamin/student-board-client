import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const AuthContexts = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  <AuthContexts.Provider value={allContext}>{children}</AuthContexts.Provider>;
};
export default AuthProvider;
