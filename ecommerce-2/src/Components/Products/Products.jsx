import { useEffect, useState } from "react";
import Product from "../SingleProduct/SingleProduct";

export default function Products() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const allProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const allProductsByCategory = (category) => {
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    const allCategories = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }
    useEffect(() => {
        allProducts()
        allCategories()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="text-center my-5">Our Products</h2>
                </div>
                <div className="row">
                    <ul className="d-flex">
                        <li>
                            <button className="btn btn-outline-success"
                                onClick={() => allProducts()}>All Products
                            </button>
                        </li>
                        {
                            categories.map(categ => {
                                return (
                                    <li key={categ} >
                                        <button className="btn btn-outline-success"
                                            onClick={() => {
                                                allProductsByCategory(categ)
                                            }}>{categ}
                                        </button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="row">
                    {
                        products.length > 0 ? products.map(product => {
                            return (
                                <div key={product.id} className="mb-4 col-md-6 col-lg-4 col-xl-3">
                                    <Product product={product} />
                                </div>
                            )
                        })
                            : null
                    }
                </div>
            </div>
        </>
    )
}
