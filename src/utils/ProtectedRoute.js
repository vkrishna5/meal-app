import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
    let { authenticated } = useContext(AuthContext)

    if (!authenticated) {
        return <Navigate to="/login" replace={true} />
    } else {
        return <Component {...props} />
    }
}

export default ProtectedRoute