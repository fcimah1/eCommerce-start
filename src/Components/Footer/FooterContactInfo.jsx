import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function FooterContactInfo() {
    return (
        <div className="contact-info">
            <h5 className="text-uppercase">CONTACT INFO</h5>
            <div className="contact-info-details">
                <ul>
                    <li>
                        <strong className="text-uppercase">Address:</strong>
                        <p>123 Street Name, City, England</p>
                    </li>
                    <li>
                        <strong className="text-uppercase">Phone:</strong>
                        <p>(123) 456-7890</p>
                    </li>
                    <li>
                        <strong className="text-uppercase">Email:</strong>
                        <p>
                            <Link className="mail" mailto="mail@example.com">mail@example.com</Link>
                        </p>
                    </li>
                    <li>
                        <strong className="text-uppercase">WORKING DAYS/HOURS:</strong>
                        <p>Mon - Sun / 9:00 AM - 8:00 PM</p>
                    </li>
                    <li className="nav-item d-flex ">
                        <Link className="nav-link fs-6 icon facebook " to="/services">
                            <CgFacebook />
                        </Link>
                        <Link className="nav-link fs-6 icon twitter" to="/services">
                            <AiOutlineTwitter />
                        </Link>
                        <Link className="nav-link fs-6 icon instgram" to="/services">
                            <BsInstagram />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
