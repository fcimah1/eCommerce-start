import { Link } from 'react-router-dom';
import '../Box/Box.css'
import { useRecoilState, useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
import { ToastContainer } from 'react-toastify';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Added Succesfully.');
export default function Box({ id, img, title, desc, price }) {
    const [cart, setCart] = useRecoilState(cartDetaials)
    const cartValues = useRecoilValue(cartDetaials)




    function operationAdd() {
        setCart([...cart, {
            id,
            countity: 1,
            img,
            title,
            desc,
            price
        }])
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
                localStorage.setItem("cart", { cart });
            } else {
                operationAdd()
                localStorage.setItem("cart", { cart });
            }
        } else {
            operationAdd()
            localStorage.setItem("cart", { cart });

        }
    }
    return (
        <div className="card">
            < ToastContainer />
            <Toaster />
            <div className="img">
                <img src={img} className="card-img-top" alt={title} />
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
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/productDetails/${id}`} className="btn-front">Show Details</Link>
                </div>
            </div>
        </div>

    )
}
