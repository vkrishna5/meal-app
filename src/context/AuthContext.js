import { createContext, useState } from "react";
import swal from "sweetalert";

export const AuthContext = createContext()

export const AuthProvider = ({ ...props }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const login = () => {
        swal("Success", "You have successfully logged in!", "success")
        setAuthenticated(true)
    }
    const logout = () => {
        swal("Success", "You have logged out!", "success")
        setAuthenticated(false)
    }
    return <AuthContext.Provider value={{ login, logout, authenticated }} {...props} />
}
