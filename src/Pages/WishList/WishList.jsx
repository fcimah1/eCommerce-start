import { IoMdArrowDropright } from "react-icons/io";
import "./WishList.css"
import { useRecoilValue } from "recoil"
import { NavLink } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import wishListDetaials from "../../Atoms/wishlist.atom"
import WishBox from "../../Components/WishBox/WishBox"
import Footer from "../../Components/Footer/Footer";
export default function WishList() {
    const wishValues = useRecoilValue(wishListDetaials)
    // const [wish, setWish] = useRecoilState(wishListDetaials)

    return (
        <>
            <div className="container">
                <Toaster />
                <div className="row">
                    <div className="col-3 mt-4">
                        <div className="menu-list">
                            <ul>
                                <li><NavLink to={"/auth"}><IoMdArrowDropright /> My Account</NavLink></li>
                                <li><NavLink to="/orders"><IoMdArrowDropright /> My Orders</NavLink></li>
                                <li><NavLink to="/wishList"><IoMdArrowDropright /> My Wish List</NavLink></li>
                                <li><NavLink to={"/account"}><IoMdArrowDropright /> Account Informations</NavLink></li>
                                <li><NavLink to={"/review"}><IoMdArrowDropright /> My Product Review</NavLink></li>
                                <li><NavLink to={"/address"}><IoMdArrowDropright /> Address Book</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9 mt-4">
                        <div className="row">
                            {
                                wishValues?.map((product, index) => {
                                    return (
                                        <div className="col-xl-3 col-lg-3 col-md-4 align-items-stretch mb-3">
                                            <WishBox index={index} id={product.id} title={product.title}
                                                price={product.price} img={product.img}
                                                desc={product.desc} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </>
    )
}
