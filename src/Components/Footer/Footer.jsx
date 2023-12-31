
import FooterContactInfo from "./FooterContactInfo";
import './footer.css';
import NewsLetter from "./NewsLetter";
import FooterServices from "./FooterServices";
import imgFooter from '../../images/shop2_payment_logo.png'

export default function Footer() {
    return (
        <footer className="bg-dark overflow-hidden ">
            <div className="row border-bottom">
                <div className=" col-lg-3 col-xl-3 col-12 mb-5">
                    <FooterContactInfo />
                </div>
                <div className=" col-lg-9 col-xl-9 col-12">
                    <NewsLetter />
                    <FooterServices />
                </div>
            </div>
            <div className="row mt-4 justify-content-between align-items-center">
                <div className="col-6">
                    <p>© Porto eCommerce. 2024. All Rights Reserved</p>
                </div>
                <div className="col-6">
                    <div className="img">
                        <img src={imgFooter} alt={imgFooter} />
                    </div>
                </div>
            </div>
        </footer>
    )
}
