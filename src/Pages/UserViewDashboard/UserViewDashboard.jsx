import { AiOutlineEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
// import './ProductView.css'
import { Link } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import DashboardNav from "../../Components/DashboardNav/DashboardNav";
export default function UserViewDashboard() {
    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        fetch('http://localhost:9000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const deleteUser = (userId) => {
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
                fetch(`http://localhost:9000/users/${userId}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(getAllUsers)
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
                    'This user has not been deleted.'

                )
            }
        })
    }

    return (
        <>
            <DashboardNav />
            <div className="container mt-5">
                <h1 className='my-5'>Users Page</h1>
                <Link className='btn btn-success mb-4' to="addUser">Add New User</Link>
                <Toaster />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">Name</th>
                            <th className="d-inline-block" scope="col">Operations</th>
                        </tr>
                    </thead>
                    <tbody className="fs-5">
                        {
                            users?.map((user, index) => {
                                return (

                                    <tr className="" key={user.id}>
                                        <th className="fs-6" scope="row">
                                            {user.id}
                                        </th>
                                        <td>
                                            <p>{user.email}</p>
                                        </td>
                                        <td>
                                            <h5 className="fs-6"> {user.name} </h5>
                                        </td>
                                        <td className="d-table-cell">
                                            <p className="d-flex align-middle">
                                                <Link to={`UserDetails/${user.id}`} title="View Details" className='text-primary mx-2 fs-4'><AiOutlineEye /></Link>
                                                <Link to={`updateUser/${user.id}`} title="Upade User" className='text-info mx-2 fs-4'><BsFillPencilFill /></Link>
                                                <Link onClick={() => { deleteUser(user.id) }} title="Delete User" className='text-danger mx-2 fs-4'><BsFillTrashFill /></Link>
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
