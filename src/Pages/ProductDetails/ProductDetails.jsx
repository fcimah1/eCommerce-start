import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import './productDetails.css'
import cartDetaials from "../../Atoms/Cart.atom";


export default function ProductDetails({ id, img, title, desc, price }) {
    const { productId } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])
    console.log(product);
    const cartValues = useRecoilValue(cartDetaials)
    const [cart, setCart] = useRecoilState(cartDetaials)

    function operationAdd() {
        setCart([...cart, {
            id: product?.id,
            countity: 1,
            img: product?.thumbnail,
            title: product?.title,
            desc: product?.description,
            price: product?.price
        }])
    }

    function addToCart(id) {
        let check = 0
        if (cartValues.length > 0) {
            let i = 0
            for (; i < cartValues.length; i++) {
                if (id === cartValues[i].id) {
                    check = 1
                    break
                }
            }
            let cunrrentProduct = cartValues[i]
            if (check === 1) {
                setCart([...cart.slice(0, i), { ...cunrrentProduct, countity: +cunrrentProduct.countity + 1 }, ...cart.slice(i + 1)])
                localStorage.setItem("cart", cart);
            } else {
                operationAdd()
            }
        } else {
            operationAdd()
        }
    }
    let imgSrcOfficial = useRef()
    let subImages
    if (typeof (product?.images) === "string") {
        subImages = JSON.parse(product.images)
    } else {
        subImages = product.images
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12 col-lg-5">
                        <div className="img">
                            <img className="current-image" ref={imgSrcOfficial} src={product?.thumbnail} alt={product.title} />
                        </div>
                        <div className="allImages">

                            {
                                subImages?.map(
                                    (image, index) => (
                                        <img onClick={() => {
                                            imgSrcOfficial.current.src = image
                                        }}
                                            key={index} src={image} alt={product.title} />

                                    ))}

                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7">
                        <h3>{product?.title}</h3>
                        <p>Category: {product?.category}</p>
                        <p>Price: $ {product?.price}</p>
                        <p>Discount: {product?.discountPercentage} %</p>
                        <p>Rating: {product?.rating} of 5</p>
                        <p>Description: {product?.description}</p>
                        <Link to="/cart" onClick={() => addToCart(product.id)} className="btn-front btn btn-primary">Add To Cart</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
