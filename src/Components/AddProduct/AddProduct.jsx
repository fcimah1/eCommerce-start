import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNav from "../DashboardNav/DashboardNav";

export default function AddProduct() {
    const [image, setImage] = useState([])
    // const [otherImages, setOtherImages] = useState([])
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let formData = new FormData(e.target)
        let primaryImage = URL.createObjectURL(image)
        formData.append("thumbnail", primaryImage)
        // let allImages = []
        // for (let i = 0; i < otherImages.length; i++) {
        //     allImages.push(URL.createObjectURL(otherImages[i]))
        // }
        // console.log(allImages);
        // if (allImages.length > 0) {
        //     formData.append("images", JSON.stringify(allImages))
        // }
        let obj = Object.fromEntries(formData)

        try {
            const res = await axios.post("http://localhost:9000/products", obj)
                (navigate('/products'))
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
                    <label htmlFor="inpTitle" className="form-label">Title</label>
                    <input name="title" type="text" className="form-control"
                        required id="inpTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpImage" className="form-label">Image</label>
                    <input type="file" accept="image/*" required
                        className="form-control" id="inpImage"
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpDescription" className="form-label">Description</label>
                    <textarea name="description" type="text" required
                        className="form-control" id="inpDescription" rows={3} cols={4}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="inpPrice" className="form-label">Price</label>
                    <input name="price" type="number" required
                        className="form-control" id="inpPrice" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpRating" className="form-label">Rating</label>
                    <input name="rating" type="number" required
                        className="form-control" id="inpRating" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpDiscount" className="form-label">Discount Percentage</label>
                    <input name="discountPercentage" type="number" required
                        className="form-control" id="inpDiscount" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpStock" className="form-label">Stock</label>
                    <input name="stock" type="number" required
                        className="form-control" id="inpStock" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpBrand" className="form-label">Brand</label>
                    <input name="brand" type="text" required
                        className="form-control" id="inpBrand" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpCategory" className="form-label">Category</label>
                    <input name="category" type="text" required
                        className="form-control" id="inpCategory" />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="inpOtherImages" className="form-label">Other Images</label>
                    <input type="file" accept="image/*" multiple
                        className="form-control" id="inpOtherImages"
                        onChange={(e) => (setOtherImages(e.target.files))} />
                </div> */}
                <button className="btn btn-primary">Add Product</button>
            </form>
        </>
    )
}
