import axios from 'axios'
import './Login.css'
import { useRef } from 'react'
import login from '../../Atoms/login.atom'
import { useRecoilState } from 'recoil'
import toast, { Toaster } from 'react-hot-toast'

export default function Login() {

    const email = useRef()
    const password = useRef()
    const [loginState, setLoginState] = useRecoilState(login)

    async function getUserInfo(input) {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://api.escuelajs.co/api/v1/users/`,
            headers: {}
        };
        try {
            const response = await axios.request(config);
            await response.data.find(item => {
                if (item.email === input) {
                    localStorage.setItem("userDetails", JSON.stringify(item))
                }
                return null
            })

        }
        catch (error) {
            console.log(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let body = {
            email: email.current.value,
            password: password.current.value,
        }
        const url = "https://api.escuelajs.co/api/v1/auth/login"

        try {
            const response = await axios.post(url, body);
            console.log(response);
            toast.success("login successfully")
            setLoginState(true)
            getUserInfo(email.current.value)
            localStorage.setItem("token", response.data.access_token)
            localStorage.setItem("login", loginState)

        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <>
            <Toaster position='bottom-center' />
            <div className="head-text pt-4 pb-5 text-center">
                <h1 className="text-capitalize">customer login</h1>
            </div>
            <div className="container">
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }} className="contact-form   needs-validation">
                    <div className="row mt-5 justify-content-center">

                        <div className="col-sm-12 col-md-6 ">
                            <h3 className="text-capitalize">registered customers</h3>
                            <small className='mb-4'>if you have account, sign in with your email address</small>
                            <div className="my-3 col-10" >
                                <label htmlFor="emailInp" className="form-label">E-mail</label>
                                <input type="email" name="email" className="form-control"
                                    id="emailInp" ref={email} />
                            </div>
                            <div className="mb-3 col-10 " >
                                <label htmlFor="passwordInp" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control"
                                    id="passwordInp" ref={password} />
                            </div>
                            <div className='mb-4 col-10'>
                                <button className="btn-front w-100 text-uppercase" >Sign in</button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
