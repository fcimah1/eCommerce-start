import { useState } from "react";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import "./Auth.css";
export default function Auth() {
  const [logged, setLogged] = useState(true)
  return (
    <div>
      {
        logged ?
          <>
            <Login />
            <div className='container mb-4 '>
              <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6">
                  <div className="col-10 text-center">
                    <button onClick={() => { setLogged(false) }} className=" btn-front w-100 text-uppercase">create an account</button>
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <>
            <SignUp />
            <div className='container mt-4 '>
              <div className="row ">
                <div className="col-sm-10 col-md-6 col-10 pe-0">
                  <button onClick={() => { setLogged(true) }} className=" btn-front w-100 text-uppercase">I already have Account</button>
                </div>
              </div>
            </div>
          </>
      }
    </div>

  )
}
