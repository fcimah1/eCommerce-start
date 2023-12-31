import { Link } from "react-router-dom";
export default function FooterServices() {
    return (
        <div className="row align-items-center mt-5">
            <div className="col-5">
                <div className="service">
                    <h5 className="text-uppercase">CUSTOMER SERVICE</h5>
                    <ul>
                        <div className="row justify-content-between">
                            <div className="col-6">
                                <li><Link to={"/about"}>About us</Link></li>
                                <li><Link to={"/contact"}>Contact us</Link></li>
                                <li><Link to={"/auth"}>My Account</Link></li>
                            </div>
                            <div className="col-6">
                                <li><Link to={"/cart"}>Order history</Link></li>
                                <li><Link to={"/search"}>Search</Link></li>
                                <li><Link to={"/auth"}>Login</Link></li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="col-7">
                <div className="service">
                    <h5 className="text-uppercase">ABOUT US</h5>
                    <ul>
                        <div className="row justify-content-between">
                            <div className="col-6">
                                <li><Link>Super Fast Wordpress Theme</Link></li>
                                <li><Link>1st Fully working Ajax Theme</Link></li>
                                <li><Link>36 Unique Shop Layouts</Link></li>
                            </div>
                            <div className="col-6">
                                <li><Link>Powerful Admin Panel</Link></li>
                                <li><Link>Mobile & Retina Optimized</Link></li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
