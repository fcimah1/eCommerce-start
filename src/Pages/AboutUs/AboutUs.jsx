
import AboutCards from "../../Components/AboutCards/AboutCards"
import Employers from "../../Components/Employers/Employers"
import "./about.css"
export default function AboutUs() {
    return (
        <>
            <div className="about">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-6 col-sm-12 about-content ">
                            <div className="content">
                                <h1>About Us</h1>
                                <p>
                                    Passion may be a friendly or eager interest in or admiration for a proposal,
                                    cause, discovery, or activity or love to a feeling of unusual excitement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutCards />
            <Employers />
        </>
    )
}
