import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../Components/Categories/category.css'
import "../Home/home.css"
import Box from "../../Components/Box/Box";


export default function CategoryView() {
    const { categoryName } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(productData => setData(productData.products));
    }, [categoryName])
    return (
        <>
            <h2 className="text-center head my-5 category">{categoryName} Products</h2>
            <div className="container">
                <div className="row">
                    {
                        data.map(({ price, id, title, thumbnail, description }) => {
                            return (
                                <div key={id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                    <Box id={id} img={thumbnail} title={title} desc={description} price={price} />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
