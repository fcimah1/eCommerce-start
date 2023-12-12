import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import cartDetaials from "../../Atoms/Cart.atom";
import $ from 'jquery';
import './navbar.css'

export default function Navbar() {
    const inpText = useRef()
    const [value, setValue] = useState("")
    const cart = useRecoilValue(cartDetaials)

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 180) {
            $('nav .linkes').addClass('fixed');
            $('nav .linkes .cart').removeClass('d-none');
        } else {
            $('nav .linkes').removeClass('fixed');
            $('nav .linkes .cart').addClass('d-none');
        }
    });
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container up-nav">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link className="navbar-brand text-white fw-bold fs-3" to="/">SOUQ.COM</Link>
                    <div className="d-flex" role="search">
                        <input ref={inpText} className="form-control me-2" onChange={() => {
                            setValue(inpText.current.value)
                        }} type="search" placeholder="Search" aria-label="Search" />
                        <Link to={(value !== "") ? `search/${inpText.current.value}`
                            : null} className="btn btn-secondary search" type="submit">Search</Link>
                    </div>
                    <div className="cart">
                        <Link to="/cart" className="text-dark "
                            onClick={console.log(cart)}>
                            <AiOutlineShoppingCart />
                            <p className="number-of-products">{cart.length}</p>
                        </Link>
                    </div>
                </div>
                <div className="container linkes">
                    <div className="collapse navbar-collapse  align-items-center" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2">
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
                        <Link to="/cart" className="text-dark "
                            onClick={console.log(cart)}>
                            <AiOutlineShoppingCart />
                            <p className="number-of-products">{cart.length}</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}
