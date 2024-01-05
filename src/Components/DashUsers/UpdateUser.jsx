import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import DashboardNav from "../DashboardNav/DashboardNav"

export default function UpdateUser() {
    const firstName = useRef()
    const secondName = useRef()
    const { userId } = useParams()
    let navigate = useNavigate()
    const [user, setUser] = useState([])
    const [image, setImage] = useState({
        preview: '',
        raw: '',
    });
    useEffect(() => {
        axios.get(`http://localhost:9000/users/${userId}`)
            .then(res => {
                setUser(res.data)
                setImage({ preview: user.avatar })


            })
            .catch(err => {
                console.log(err)
            })
    }, [user.avatar, userId])
    async function handleUpdate(e) {
        e.preventDefault()
        console.log(image.preview);
        let formData = new FormData(e.target)
        formData.append('avatar', image.preview);
        formData.append("name", `${firstName.current.value} ${secondName.current.value}`)
        let obj = Object.fromEntries(formData)
        console.log(obj);
        try {
            const res = await axios.put(`http://localhost:9000/users/${userId}`, obj)
            if (res) {
                (navigate('/dashboard/dashboardUsers'))
            }
            console.log(res)
        } catch (error) {
            console.log(error);
        }
    }


    const handlePhotoChange = (e) => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0],
            });
            console.log(image.preview);
        }
    };
    return (
        <>
            <DashboardNav />
            <form className="container mt-5" onSubmit={(e) => handleUpdate(e)}>
                <div className="mb-3">
                    <label htmlFor="inpFirstName" className="form-label">First Name</label>
                    <input ref={firstName} type="text" className="form-control"
                        required id="inpFirstName" defaultValue={user?.name?.split(" ")[0]} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpSecondName" className="form-label">Second Name</label>
                    <input ref={secondName} type="text" className="form-control"
                        required id="inpSecondName" defaultValue={user?.name?.split(" ")[1]} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpImage" className="form-label">Image: </label><br />
                    {/* <img src={product.thumbnail} alt="" /> */}
                    <label htmlFor="inpImage">
                        {image.preview ? (
                            <img
                                src={image.preview}
                                alt={user.name}
                            />
                        ) : (
                            <>
                                <p className="">
                                    Upload Image
                                </p>
                                <div className="" />
                            </>
                        )}
                    </label>
                    <input type="file" style={{ display: 'none' }} accept="image/*"
                        className="form-control" id="inpImage" name="image"
                        onChange={handlePhotoChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpPassword" className="form-label">Password</label>
                    <input name="password" type="text" required
                        className="form-control" id="inpPassword" defaultValue={user?.password} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpEmail" className="form-label">E-mail</label>
                    <input name="email" type="email" required
                        className="form-control" id="inpEmail" defaultValue={user?.email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpRole" className="form-label">Role</label>
                    <input name="role" type="text" required
                        className="form-control" id="inpRole" defaultValue={user?.role} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpAddress" className="form-label">Address</label>
                    <input name="address" type="text"
                        className="form-control" id="inpAddress" defaultValue={user?.address} />
                </div>
                <button className="btn btn-primary">Update User</button>
            </form >
        </>
    )
}
