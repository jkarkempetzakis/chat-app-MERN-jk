import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

//hook to use throughout the app
export const useAuthContext = () => {
    return useContext(AuthContext);
}

//provide values to use throughout application. Providing the auth state to the entire application
export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("authUser")) || null);

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>
}