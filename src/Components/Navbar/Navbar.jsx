import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
import logo from "../../images/logo_ecomwhite_lg.png"
import $ from 'jquery';
import './navbar.css'
import wishListDetaials from "../../Atoms/wishlist.atom";

export default function Navbar() {
    const inpText = useRef()
    const [value, setValue] = useState("")
    const cart = useRecoilValue(cartDetaials)
    const wishValues = useRecoilValue(wishListDetaials)

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 180) {
            $('nav .links').addClass('fixed');
            $('nav .links .cart').removeClass('d-none');
        } else {
            $('nav .links').removeClass('fixed');
            $('nav .links .cart').addClass('d-none');
        }
    });
    return (
        <>
            <nav className="navbar pb-0 navbar-expand-lg">
                <div className="container d-flex pb-3 align-items-center up-nav w-100">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand text-white" to="/">
                        <img src={logo} alt="logo" height="44" width="111" />
                    </Link>
                    <div className="search-part search d-flex" role="search">
                        <input ref={inpText} className="form-control me-2" onChange={() => {
                            setValue(inpText.current.value)
                        }} type="search" placeholder="Search" aria-label="Search" />
                        <Link to={(value !== "") ? `search/${inpText.current.value}`
                            : null} className="primary-search" type="submit"><BsSearch /></Link>
                    </div>
                    <div className="calling d-flex align-items-center gap-2  text-white">
                        <div className="telephone fs-4">
                            <BsTelephone />
                        </div>
                        <div className="telephone-details fs-6 ">
                            <h6 className="text-uppercase text-white m-0">calling now</h6>
                            <span>01120882362</span>
                        </div>
                    </div>
                    <div className="icons d-flex text-white gap-3 fs-2">
                        <div className="search-icon">
                            <Link to={(value !== "") ? `search/${inpText.current.value}`
                                : null} className="primary-search" onClick={() => {
                                    $('nav .container .search-part').toggleClass('absoulate');
                                    $('nav .container .search-part').toggleClass('search');
                                }}><BsSearch /></Link>
                        </div>
                        <div className="account  ">
                            <Link title="Account"><CiUser /></Link>
                        </div>
                        <div className="cart wishList">
                            <Link to="wishList" title="WishList"><AiOutlineHeart />
                                <p className="number-of-products">{wishValues.length}</p></Link>
                        </div>
                        <div className="cart">
                            <Link to="/cart" className=" ">
                                <AiOutlineShoppingCart />
                                <p className="number-of-products">{cart.length}</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center links px-3">
                    <div className="collapse navbar-collapse  align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " to="/about">
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " to="/contact">
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link " to="/services">
                                    Services
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                    <div className="cart d-none">
                        <Link to="/cart" className="text-white fs-3 pt-1 ps-1 ">
                            <AiOutlineShoppingCart />
                            <p className="number-of-products">{cart.length}</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
