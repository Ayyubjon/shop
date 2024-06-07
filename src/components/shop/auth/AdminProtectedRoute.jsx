import { useNavigate } from "react-router-dom"
import {isAdmin, isAuthenticate} from "./FetchApi"
const AdminProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const isAdminUser = isAdmin()
    const isAuthenticateUser = isAuthenticate()

    if (isAdminUser && isAuthenticateUser) {
        return children
    }else{
        return navigate("/user/profile")
    }
}

export default AdminProtectedRoute
