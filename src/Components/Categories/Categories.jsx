import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./category.css"
export default function Categories() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(setCategory);
    }, [])
    return (
        <>
            {
                category?.map((categ, id) => {
                    if (id < 12) {
                        return (<li key={id}><Link key={id} className=" dropdown-item category" to={`category/${categ}`}>{categ}</Link></li>)
                    }return null
                })
            }
        </>
    )
}
