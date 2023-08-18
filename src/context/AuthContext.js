import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ ...props }) => {
    const [authenticated, setAuthenticated] = useState(false)
    const login = () => {
        alert("You have successfully logged in!")
        setAuthenticated(true)
    }
    const logout = () => {
        alert("You have logged out!")
        setAuthenticated(false)
    }
    return <AuthContext.Provider value={{ login, logout, authenticated }} {...props} />
}
