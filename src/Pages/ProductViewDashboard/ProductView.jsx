import { AiOutlineEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import './ProductView.css'
import { Link } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
export default function DashboardOfProductView() {
    const [product, setProduct] = useState([])

    const getAllProducts = () => {
        fetch('http://localhost:9000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const deleteProduct = (productId) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ',
                cancelButton: 'btn btn-danger me-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure to delete?',
            text: "press cancel if you want to cancel",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'delete!',
            cancelButtonText: 'cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:9000/products/${productId}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(getAllProducts)
                    .then
                    (swalWithBootstrapButtons.fire(
                        'Deleted!',
                        'Your Product has been deleted.',
                        'success'
                    ))

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Product has not been deleted.'

                )
            }
        })
    }

    return (
        <>
            <div className="container mt-5">
                <h1 className='my-5'>Product Page</h1>
                <Link className='btn btn-success mb-4' to="addProduct">Add New Product</Link>
                <Toaster />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th className="d-inline-block" scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody className="fs-5">
                        {
                            product?.map((prod, index) => {
                                return (

                                    <tr className="" key={prod.id}>
                                        <th className="fs-6" title="delete from cart" scope="row">
                                            {prod.id}
                                        </th>
                                        <td>
                                            <img src={prod.thumbnail} className="img fs-6" alt={prod.title} />
                                        </td>
                                        <td>
                                            <h5 className="fs-6">{prod.title}</h5>
                                        </td>
                                        <td className="d-table-cell">
                                            <p className="d-flex align-middle">
                                                <Link to={`/productDetails/${prod.id}`} title="View Details" className='text-primary mx-2 fs-4'><AiOutlineEye /></Link>
                                                <Link to={`updateProduct/${prod.id}`} title="Upade Product" className='text-info mx-2 fs-4'><BsFillPencilFill /></Link>
                                                <Link onClick={() => { deleteProduct(prod.id) }} title="Delete Product" className='text-danger mx-2 fs-4'><BsFillTrashFill /></Link>
                                            </p>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
