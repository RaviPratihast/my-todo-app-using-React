import { createContext, useContext, useReducer } from "react";
import { AuthReducer } from "../Reducers/AuthReducer";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const initialState = {
  loggedIn: false,
  users: [
    { user: "Ravi", password: "123" },
    { user: "a", password: "1" },
  ],
};

const AuthProvider = ({ children }) => {
  const [stateAuth, dispatchAuth] = useReducer(AuthReducer, initialState);
  return (
    <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
