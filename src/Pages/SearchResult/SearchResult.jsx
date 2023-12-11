import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Box from "../../Components/Box/Box"

export default function SearchResult() {
    const { value } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/products/search?q=${value}`)
            .then(res => res.json())
            .then(productData => setData(productData.products));
    }, [value])
    return (
        <>
            <h2 className="text-center head my-5">Search Result</h2>
            <div className="container">
                {(data.length > 0) ?

                    <div className="row">
                        {
                            data.map(({ price, id, title, thumbnail, description }) => {
                                return (
                                    <div key={id} className="col-md-6 col-lg-4 col-xl-3 mb-3" >
                                        <Box id={id} img={thumbnail} title={title} desc={description} price={price} />
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
