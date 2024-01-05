
import { NavLink } from "react-router-dom"

export default function DashboardNav() {
    return (
        <>
            <nav className="bg-dark">
                <div className="container">
                    <ul className="navbar-nav d-flex flex-row justify-content-center text-white py-3 gap-3 ">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard/dashboardProducts">Products</NavLink>
                        </li>
                        <li className="nav-item ">
                            <NavLink className="nav-link" to="/dashboard/dashboardUsers">Users
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
