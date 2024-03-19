import axios from "axios"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import DashboardNav from "../DashboardNav/DashboardNav"

export default function AddUser() {
    const [image, setImage] = useState([])
    const firstName = useRef()
    const secondName = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData(e.target)
        let primaryImage = URL.createObjectURL(image)
        formData.append("avatar", primaryImage)
        formData.append("name", `${firstName.current.value} ${secondName.current.value}`)
        let obj = Object.fromEntries(formData)

        try {
            const res = await axios.post("https://dummyjson.com/users/add", obj)
                (navigate('/dashboard/dashboardUsers'))
            console.log(res)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <DashboardNav />
            <form className="container mt-5" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="inpFirstName" className="form-label">First Name</label>
                    <input ref={firstName} type="text" className="form-control"
                        required id="inpFirstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpSecondName" className="form-label">Second Name</label>
                    <input ref={secondName} type="text" className="form-control"
                        required id="inpSecondName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpImage" className="form-label">Avatar</label>
                    <input type="file" accept="image/*" required
                        className="form-control" id="inpImage"
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpPassword" className="form-label">Password</label>
                    <input name="password" type="text" required
                        className="form-control" id="inpPassword" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpEmail" className="form-label">E-mail</label>
                    <input name="email" type="email" required
                        className="form-control" id="inpEmail" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpRole" className="form-label">Role</label>
                    <input name="role" type="text" required
                        className="form-control" id="inpRole" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpAddress" className="form-label">Address</label>
                    <input name="address" type="text"
                        className="form-control" id="inpAddress" />
                </div>
                <button className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
}
