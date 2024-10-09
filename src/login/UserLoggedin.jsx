
import { Navigate, Outlet } from "react-router-dom";



const UserLoggedin = () => {
    const userInfo = localStorage.getItem("value")
    return (
        userInfo ? < Outlet /> : <Navigate to='/' />
    )
}

export default UserLoggedin