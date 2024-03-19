import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Box from "../../Components/Box/Box"

export default function SearchResult() {
    const { value } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${value}`)
            .then(res => res.json())
            .then(productData => setData(productData));
    }, [value])

    return (
        <>
            <h2 className="text-center head my-5">Search Result</h2>
            <div className="container">
                {(data.products.length) ?

                    <div className="row">
                        {
                            data?.products?.map((product) => {
                                console.log(product);
                                return (
                                    <div key={product.id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                        <Box id={product.id} img={product.thumbnail} title={product.title} desc={product.description} price={product.price} />
                                    </div>)
                            })
                        }
                    </div>
                    :
                    <p className="text-center">No result found</p>
                }
            </div>
        </>
    )
}
