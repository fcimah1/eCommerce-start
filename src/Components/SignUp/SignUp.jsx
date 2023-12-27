import axios from 'axios'
import './SignUp.css'
import { useEffect, useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    var arrOfEmails = []
    var availableEmail = {}
    let navigate = useNavigate()



    async function makeRequest() {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://api.escuelajs.co/api/v1/users/',
            headers: {}
        };
        try {
            const response = await axios.request(config);
            availableEmail = await ((response.data));
            // console.log(availableEmail);
            await availableEmail?.map((user) => {
                return arrOfEmails.push(user.email)
            })

        }
        catch (error) {
            console.log(error.response.data);
        }
    }
    useEffect(() => {
        makeRequest()
    })

    async function handleSubmit(e) {
        e.preventDefault()
        if (password.current.value !== confirmPassword.current.value) {
            toast.error("Passwords do not match")
            return null;
        }
        if (password.current.value.length < 8) {
            toast.error("Password should be at least 8 character or number")
            return null;
        }
        let body = {
            name: `${firstName.current.value} ${lastName.current.value}`,
            email: email.current.value,
            password: password.current.value,
            avatar: "https://picsum.photos/800"
        }
        const url = "https://api.escuelajs.co/api/v1/users/"
        console.log(arrOfEmails[5]);
        if (arrOfEmails.includes(email.current.value)) {
            toast.error("Email already exists")
            return null
        } else {
            try {
                const response = await axios.post(url, body);
                (navigate('/'))

                console.log(response.data);
            } catch (error) {
                console.error(error.response.data);
            }
        }
    }



    return (
        <>
            <Toaster
                position='bottom-center' />
            <div className="head-text pt-4 pb-5 text-center">
                <h1 className="text-capitalize">create new customer account</h1>
            </div>
            <div className="container">

                <form onSubmit={(e) => {
                    makeRequest();
                    handleSubmit(e)
                }} className="contact-form  needs-validation">
                    <div className="row mt-5">

                        <div className="col-sm-12 col-md-6 ">
                            <h3 className="text-capitalize">personal inforamtion</h3>
                            <div className="mb-3 col-10" >
                                <label htmlFor="firstNameInp" className="form-label">First Name</label>
                                <input type="text" name="firstName" className="form-control"
                                    id="firstNameInp" ref={firstName} required />
                            </div>
                            <div className="mb-3 col-10 " >
                                <label htmlFor="lastNameInp" className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-control"
                                    id="lastNameInp" ref={lastName} required />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <h3 className="text-capitalize">sing-in inforamtion</h3>

                            <div className="mb-3 col-10" >
                                <label htmlFor="emailInp" className="form-label">E-mail</label>
                                <input type="email" name="email" className="form-control"
                                    id="emailInp" ref={email} required />
                            </div>

                            <div className="mb-3 col-10 " >
                                <label htmlFor="passwordInp" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control"
                                    id="passwordInp" ref={password} required />
                            </div>

                            <div className="mb-3 col-10" >
                                <label htmlFor="confirmPasswordInp" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control"
                                    id="confirmPasswordInp" ref={confirmPassword} required />
                            </div>
                        </div>

                    </div>
                    <button className="btn-front col-md-6 col-sm-10 col-10 text-uppercase">create an account</button>
                </form>
            </div>
        </>
    )
}
