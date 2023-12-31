import { Link } from "react-router-dom"
import "./Product.css"
export default function Product({ product }) {
    // console.log(product)
    return (
        <>
            <div className="card" >
                <div className="img">
                    <img src={product.image} className="card-img-top" alt={product.title} />

                </div>
                <div className="card-body">
                    <h5 className="card-title">{product.title.split(" ").slice(0, 7).join(" ")}</h5>
                    <p className="card-text">{product.description.split(" ").slice(0, 7).join(" ")}</p>
                    <p className="card-text">{product.price}$</p>
                    <Link to={`product/${product.id}`} className="btn btn-primary">More Details</Link>
                </div>
            </div>
        </>
    )
}
