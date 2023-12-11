import React, { useEffect, useState } from 'react'
import Box from '../Components/Box/Box';

export default function TopRated() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    console.log(product);
    return (
        <>
            <div className="container my-5">
                <h2 className=" text-center head pb-2 my-5 text-primary ">Top Rate Products</h2>
                <div className="row pt-5">
                    {(product !== "") ?
                        product.map(({ price, id, title, thumbnail, description, rating }, index) => {
                            if (index < 8 && rating > 4) {
                                return (
                                    <div key={id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                        <Box id={id} img={thumbnail} title={title} desc={description} price={price} />
                                    </div>)
                            }
                            return null
                        }) :
                        <h2 className="text-center">Loading................</h2>
                    }
                </div>
            </div>
        </>
    )
}
