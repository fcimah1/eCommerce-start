import "./WishList.css"
import { useRecoilValue } from "recoil"
import { Link } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import wishListDetaials from "../../Atoms/wishlist.atom"
import WishBox from "../../Components/WishBox/WishBox"
export default function WishList() {
    const wishValues = useRecoilValue(wishListDetaials)
    // const [wish, setWish] = useRecoilState(wishListDetaials)

    return (
        <div className="container">
            <Toaster />
            <div className="row">
                <div className="col-3">
                    <div className="menu-list">
                        <ul>
                            <li><Link>My Account</Link></li>
                            <li><Link to="cart">My Orders</Link></li>
                            <li><Link to="/wishList">My Wish List</Link></li>
                            <li><Link>Account Informations</Link></li>
                            <li><Link>My Product Review</Link></li>
                            <li><Link>Address Book</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row">
                        {
                            wishValues?.map((product, index) => {
                                return (
                                    <div className="col-xl-3 col-lg-3 col-md-4">
                                        <WishBox id={product.id} title={product.title}
                                            price={product.price} img={product.img} />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
