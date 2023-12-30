import { Navigate, Outlet } from "react-router-dom";

function Logg(props) {
    return props.logged ? <Navigate to={"/"} /> : <Outlet />
}

export { Logg }