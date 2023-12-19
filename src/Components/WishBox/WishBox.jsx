import { Link } from 'react-router-dom';
import '../Box/Box.css'
import { useRecoilState, useRecoilValue } from "recoil";
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import wishListDetaials from '../../Atoms/wishlist.atom';

const notify = () => toast.success('Added Succesfully.');
export default function WishBox({ id, img, title, desc, price }) {

    const wishValues = useRecoilValue(wishListDetaials)
    const [wish, setWish] = useRecoilState(wishListDetaials)

    function operationDelete(index) {
        setWish([...wish.slice(0, index), ...wish.slice(index + 1)])
    }
    localStorage.setItem("wishList", JSON.stringify(wish));





    function operationAdd() {
        setWish([...wish, {
            id,
            countity: 1,
            img,
            title,
            desc,
            price
        }])
    }

    function addToWishList(id) {
        let check = 0
        if (wishValues.length > 0) {
            let i = 0
            for (; i < wishValues.length; i++) {
                if (id === wishValues[i].id) {
                    check = 1
                    break
                }
            }
            let cunrrentProduct = wishValues[i]
            if (check === 1) {
                setWish([...wish.slice(0, i), { ...cunrrentProduct, countity: +cunrrentProduct.countity + 1 }, ...wish.slice(i + 1)])
            } else {
                operationAdd()
            }
        } else {
            operationAdd()
        }
    }

    localStorage.setItem("wishList", JSON.stringify(wish));

    return (
        <div className="card">
            < ToastContainer />
            <Toaster />
            <div className="img">
                <img src={img} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">price: ${price} </p>
                <div onClick={() => {
                    operationDelete(id)
                    toast.success('Deleted Successfully')
                }} className="text-danger delete" title="Remove Item">Remove</div>

                <Link to='/cart'
                    onClick={() => {
                        notify();
                        addToWishList(id);
                    }
                    }
                    className="btn btn-dark">Add To Cart
                </Link>

            </div>
        </div>

    )
}
