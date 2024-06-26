import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../Box/Box.css'
import { useRecoilState, useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';
import wishListDetaials from "../../Atoms/wishlist.atom";


const notify = () => toast.success('Added Succesfully.');
export default function Box({ id, img, title, desc, price }) {
    const [cart, setCart] = useRecoilState(cartDetaials)
    const cartValues = useRecoilValue(cartDetaials)
    const [wish, setWish] = useRecoilState(wishListDetaials)
    const wishValues = useRecoilValue(wishListDetaials)
    console.log(img);

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
                setWish([...wish, productDetails])
            }
        } else {
            setWish([...wish, productDetails])
        }
    }

    let arrOfWishList = []
    wishValues.map(prod => arrOfWishList.push(prod.id))
    console.log(arrOfWishList);

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishList", JSON.stringify(wish));


    return (
        <div className="card">
            < ToastContainer />
            <Toaster />
            <div className="img">
                <img src={img} className="card-img-top" alt={title} />
                <span className={`wish-list ${(arrOfWishList.includes(id) && ("red"))}`}>
                    <Link to='/wishList' onClick={() => {
                        addToWishList(id)
                    }}><AiOutlineHeart /></Link>
                </span>
                <div to='/cart'
                    onClick={() => {
                        notify();
                        addToCart(id);
                    }
                    }
                    className="addCart w-100 ">Add To Cart
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">price: ${price} </p>
                <p className="card-text">{desc.split(" ").slice(1, 6).join(" ")}</p>
                <div className='d-flex align-items-center'>
                    <Link to={`/productDetails/${id}`} className="btn-front">Show Details</Link>
                </div>
            </div>
        </div>
    )
}
