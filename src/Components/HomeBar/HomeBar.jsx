import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaShippingFast } from "react-icons/fa";
import './HomeBar.css'

export default function HomeBar() {
    return (
        <>
            <div className="container pt-5 ">
                <div className="row border justify-content-center">
                    <div className="col-lg-4 col-xl-4 col-10">
                        <div className="block d-flex ">
                            <div className="icon fs-1 me-4"><FaShippingFast /></div>
                            <div className="text">
                                <h3 className="text-uppercase">FREE SHIPPING & RETURN</h3>
                                <p cl>Free shipping on orders over $99.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-10">
                        <div className="block d-flex ">
                            <div className="icon fs-1 me-4"><RiMoneyDollarCircleLine /></div>
                            <div className="text">
                                <h3 className=" text-uppercase">MONEY BACK GUARANTEE</h3>
                                <p>100% money back guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-10">
                        <div className="block d-flex align-items-center">
                            <div className="icon  me-4 fs-1"><FaShippingFast /></div>
                            <div className="text">
                                <h3 className="text-uppercase">ONLINE SUPPORT 24/7</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
