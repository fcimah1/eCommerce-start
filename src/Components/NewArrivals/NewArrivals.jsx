import React, { useEffect, useState } from 'react'
import './newArrivals.css'
import { Link } from 'react-router-dom'
export default function NewArrivals() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProduct(data.products))
    }, [])
    return (
        <>
            <div className="container my-5">
                <h2 className="  text-danger ">New Arrivals</h2>
                <div className="row pt-5">
                    {(product !== "") ?
                        product.map(({ id, title, thumbnail }, index) => {
                            if (index % 5 === 0) {
                                return (
                                    <div key={id} className={`col-md-6 col-lg-4 col-xl-3 mb-3`} >
                                        <div id="img">
                                            <img src={thumbnail} alt={title} />
                                        </div>
                                        <Link to={`/productDetails/${id}`}>
                                            <h4 id='title' className=' text-center mt-3'>{title}</h4></Link>
                                    </div>)
                            }
                            return null;
                        }) :
                        <h2 className="text-center">Loading................</h2>
                    }
                </div>
            </div>
        </>
    )
}
