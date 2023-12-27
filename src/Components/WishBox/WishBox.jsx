import { Link } from 'react-router-dom';
import './WishBox.css'
import { useRecoilState, useRecoilValue } from "recoil";
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import wishListDetaials from '../../Atoms/wishlist.atom';
import cartDetaials from '../../Atoms/Cart.atom';
import Swal from 'sweetalert2';

const notify = () => toast.success('Added Succesfully.');
export default function WishBox({ id, img, title, desc, index, price }) {

    const [wish, setWish] = useRecoilState(wishListDetaials)
    const [cart, setCart] = useRecoilState(cartDetaials)
    const cartValues = useRecoilValue(cartDetaials)

    function operationDelete(index) {
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
                setWish([...wish.slice(0, index), ...wish.slice(index + 1)])
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your Product has been deleted from wishList.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your Product has not been deleted.'
                )
            }
        })

    }

    let productDetails = {
        id,
        countity: 1,
        img,
        title,
        desc,
        price
    }


    function addToCart(id) {
        let check = 0
        if (cartValues.length > 0) {
            let i = 0
            for (; i < cartValues.length; i++) {
                if (id === cartValues[i].id) {
                    check = 1
                    break
                }
            }
            let cunrrentProduct = cartValues[i]
            if (check === 1) {
                setCart([...cart.slice(0, i), { ...cunrrentProduct, countity: +cunrrentProduct.countity + 1 }, ...cart.slice(i + 1)])
            } else {
                setCart([...cart, productDetails])
            }
        } else {
            setCart([...cart, productDetails])
        }
    }

    localStorage.setItem("wishList", JSON.stringify(wish));

    return (
        <div className="card">
            < ToastContainer />
            <Toaster />
            <div className="img">
                <Link to={`/productDetails/${id}`}><img src={img}  className="card-img-top" alt={title} /></Link>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">price: ${price} </p>
                <div className='d-flex gap-1 '>
                    <Link onClick={() => {
                        operationDelete(index)
                    }} className="text-danger btn btn-wish-list" title="Remove Item">Remove</Link>
                    <Link to='/cart'
                        onClick={() => {
                            notify();
                            addToCart(id);
                        }}
                        className="btn-front btn-wish-list ">Add To Cart</Link>
                </div>
            </div>
        </div>

    )
}
