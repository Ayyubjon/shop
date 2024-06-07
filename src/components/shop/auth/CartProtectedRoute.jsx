import { Navigate } from "react-router-dom"
import { isAuthenticate } from "./FetchApi"

const CartProtectRoute = () => {
    const localStorage = JSON.parse(localStorage.getItem("cart")).length

    if(localStorage !== 0){
        const isAuthenticateUser = isAuthenticate()
        return isAuthenticateUser ? children : <Navigate to='/'/>
    }
}

export default CartProtectRoute