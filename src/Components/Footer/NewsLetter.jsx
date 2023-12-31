import { Link } from "react-router-dom";

export default function NewsLetter() {
    return (
        <>
            <div className="row align-items-center border-bottom">
                <div className="col-6">
                    <div className="newsletter-text">
                        <h5 className="text-uppercase">SUBSCRIBE NEWSLETTER</h5>
                        <p>Get all the latest information on Events, Sales
                            and Offers. <br />Sign up for newsletter today.
                        </p>
                    </div>
                </div>
                <div className="col-6">
                    <div className="newsletter-input">
                        <div className=" d-flex ">
                            <input className="form-control me-2 w-100" name="emailInp"
                                type="email" placeholder="Email Address" />
                            <Link to="" className=" text-uppercase" type="submit">sebscrie</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
