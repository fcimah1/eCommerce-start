import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DashboardNav from "../DashboardNav/DashboardNav";

export default function UserDetails({ name, email, password, avatar, role, address }) {
    const { userId } = useParams()
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9000/users/${userId}`)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [userId])
    return (
        <>
            <DashboardNav />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <div className="img">
                            <img className="current-image" ref={avatar} src={user?.avatar} alt={user.name} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <h3>Name: {user?.name}</h3>
                        <p>Password: {user?.password}</p>
                        <p>E-mail:  {user?.email}</p>
                        <p>Role: {user?.role} </p>
                        <p>Address: {user?.address} </p>
                    </div>
                </div>
            </div>
        </>
    )
}
