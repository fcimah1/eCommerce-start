import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardNav from "../DashboardNav/DashboardNav";

export default function UpdateProduct() {
    const [product, setProduct] = useState([])
    const [image, setImage] = useState({
        preview: '',
        raw: '',
    });
    // const [otherImages, setOtherImages] = useState([])
    let navigate = useNavigate()
    const { productId } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:9000/products/${productId}`)
            .then(res => {
                setProduct(res.data)
                setImage({ preview: product.thumbnail })

            })
            .catch(err => {
                console.log(err)
            })
    }, [product.thumbnail, productId])

    async function handleUpdate(e) {
        e.preventDefault()
        console.log(image.preview);
        let formData = new FormData(e.target)
        await formData.append('thumbnail', image.preview);
        // let allImages = []
        // for (let i = 0; i < otherImages.length; i++) {
        //     allImages.push(URL.createObjectURL(otherImages[i]))
        // }
        // console.log(allImages);
        // if (allImages.length > 0) {
        //     formData.append("images", JSON.stringify(allImages))
        // }
        let obj = Object.fromEntries(formData)
        console.log(obj);
        try {
            const res = await axios.put(`https://dummyjson.com/products/${productId}`, obj)
            if (res) {
                (navigate('/dashboard/dashboardProducts'))
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
                    <label htmlFor="inpTitle" className="form-label">Title</label>
                    <input name="title" defaultValue={product.title} required
                        type="text" className="form-control" id="inpTitle" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpImage" className="form-label">Image: </label><br />
                    {/* <img src={product.thumbnail} alt="" /> */}
                    <label htmlFor="inpImage">
                        {image.preview ? (
                            <img
                                src={image.preview}
                                alt={product.title}
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
                    <label htmlFor="inpDescription" className="form-label">Description</label>
                    <textarea name="description" defaultValue={product.description}
                        type="text" className="form-control" id="inpDescription" rows={3} cols={4}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="inpPrice" className="form-label">Price</label>
                    <input name="price" defaultValue={product.price} required
                        type="number" className="form-control" id="inpPrice" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpRating" className="form-label">Rating</label>
                    <input name="rating" type="number" defaultValue={product.rating} required
                        className="form-control" id="inpRating" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpDiscount" className="form-label">Discount Percentage</label>
                    <input name="discountPercentage" defaultValue={product.discountPercentage} required
                        type="number" className="form-control" id="inpDiscount" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpStock" className="form-label">Stock</label>
                    <input name="stock" type="number" defaultValue={product.stock} required
                        className="form-control" id="inpStock" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpBrand" className="form-label">Brand</label>
                    <input name="brand" type="text" defaultValue={product.brand} required
                        className="form-control" id="inpBrand" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inpCategory" className="form-label">Category</label>
                    <input name="category" type="text" defaultValue={product.category} required
                        className="form-control" id="inpCategory" />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="inpOtherImages" className="form-label">Other Images</label>
                    <input type="file" accept="image/*" multiple
                        // value={ }
                        className="form-control" id="inpOtherImages"
                        onChange={(e) => (setOtherImages(e.target.files))} />
                </div> */}
                <button className="btn btn-primary">Update Product</button>
            </form>
        </>
    )
}
