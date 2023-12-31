import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './ProductDetails.css'

export default function ProductDetails() {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <div className="img">
                            <img src={product?.image} alt={product.title} />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <h3 className="text-dark">{product?.title}</h3>
                        <p>Category: {product?.category}</p>
                        <p>Price: $ {product?.price}</p>
                        {/* <p>Discount: {product?.discountPercentage} %</p> */}
                        {/* <p>Rating: {product?.rating} of 5</p> */}
                        <p>Description: {product?.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
