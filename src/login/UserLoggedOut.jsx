
import { Navigate, Outlet } from "react-router-dom";


const UserLoggedOut = () => {
    const userInfo = localStorage.getItem("value")
    return (
        userInfo? <Navigate to='/calculator' /> : <Outlet />
    )
}

export default UserLoggedOut