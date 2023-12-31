import { MdDone } from "react-icons/md";
import { TbMathGreater } from "react-icons/tb";
import "./ContactUs.css"
import { Link } from "react-router-dom";
import User from "../../Atoms/UserDetails.atom";
import { useRecoilValue } from "recoil";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import $ from 'jquery';
import Footer from "../../Components/Footer/Footer";
export default function ContactUs() {
    const user = useRecoilValue(User)

    function clearInputs() {
        $("input").val("");
        $("textarea").val("");
    }

    async function handleMassage(e) {
        e.preventDefault();
        let formData = new FormData(e.target)
        formData.append("user-id", user.id)
        let obj = Object.fromEntries(formData)
        console.log(obj);
        try {
            const response = await axios.post("http://localhost:9000/messages", obj)
            console.log(response.status);
            if (response.status === 201) {
                $(".contact .container .message").addClass("message-send")
                $(".contact .container .message").removeClass("message-send-none")
            }
            clearInputs()
        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <>
            <Toaster position='top-center' />
            <div className="contact mt-4">
                <div className="container addr">
                    <p><Link className="homeLink" to="/">Home</Link>  <TbMathGreater />  Contact Us</p>
                    <p className="message message-send-none"><MdDone className="me-2 true" />
                        Thanks for contacting us with your comments and questions.
                        We'll respond to you very soon.
                    </p>
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 align-items-stratch mb-5">
                            <div className="contact-head">
                                <div className="contact-title">
                                    <h2>Leave A Message</h2>
                                </div>
                                <p>
                                    If you have any questions please send us a message using
                                    the adjacent form and we will get back to you as soon as possible
                                </p>
                            </div>
                            <form onSubmit={(e) => { handleMassage(e) }} className="contact-form  needs-validation">
                                <div className="mb-3" >
                                    <label htmlFor="nameInp" className="form-label">Name</label>
                                    <input type="text" name="name" className="form-control" id="nameInp"
                                        placeholder="enter your name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailInp" className="form-label">Email address</label>
                                    <input type="email" name="email" className="form-control " id="emailInp"
                                        placeholder="name@example.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phoneInp" className="form-label">Phone Number</label>
                                    <input type="tel" name="phone" className="form-control" id="phoneInp"
                                        placeholder="enter phone number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="messageArea" className="form-label">Message*</label>
                                    <textarea className="form-control" required name="massage" id="messageArea" rows="3" ></textarea>
                                </div>
                                <button className="btn-front btn-front-primary rounded-pill">Send Meeage</button>

                            </form>
                        </div>
                        <div className="col-lg-6 col-md-12 align-items-stratch">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5762.30183292078!2d-79.33197!3d43.769726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d25ef313d221%3A0x519a94099352214f!2s243%20Consumers%20Rd%2C%20North%20York%2C%20ON%20M2J%204W8%2C%20Canada!5e0!3m2!1sen!2sus!4v1701740230814!5m2!1sen!2sus"
                                width="600" height="600" allowFullScreen="" loading="lazy"
                                title="location" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
