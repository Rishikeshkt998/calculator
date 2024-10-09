
import { Navigate, Outlet } from "react-router-dom";



const UserLoggedIn = () => {
    const userInfo = localStorage.getItem("value")
    return (
        userInfo ? < Outlet /> : <Navigate to='/calculator' />
    )
}

export default UserLoggedIn