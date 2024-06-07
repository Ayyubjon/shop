import { useNavigate } from "react-router-dom"
import { isAdmin, isAuthenticate } from "./FetchApi"

const ProtectedRoute = ({children}) =>  {
    const navigate = useNavigate()

    const isAuthenticateUser = isAuthenticate()
    const isAdminUser = isAdmin()

    if (isAuthenticateUser && isAdminUser) {
        return children
    }else{
        return navigate("/")
    }


}