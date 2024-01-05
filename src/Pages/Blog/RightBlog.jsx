import { BiSearchAlt2 } from "react-icons/bi";
import post_1 from '../../images/post_1.png'
import post_2 from '../../images/post_2.png'
import post_3 from '../../images/post_3.png'
import post_4 from '../../images/post_4.png'
import post_5 from '../../images/post_5.png'
import post_6 from '../../images/post_6.png'
import post_7 from '../../images/post_7.png'
import post_8 from '../../images/post_8.png'
import post_9 from '../../images/post_9.png'
import post_10 from '../../images/post_10.png'
import Categories from "../../Components/Categories/Categories";
export default function RightBlog() {
    return (

        <div className="right-box col-lg-4">
            <div className="single-sidebar-div">
                <div className="mb-3 search-form">
                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                    <button className="btn-front ">
                        <BiSearchAlt2 className="text-white" />
                    </button>
                </div>
                <button className="text-uppercase btn-front w-100">search</button>
            </div>
            <div className="single-sidebar-div">
                <h4>Category</h4>
                <ul>
                <Categories />
                </ul>
            </div>
            <div className="single-sidebar-div">
                <h4>Recent Post </h4>
                <div className="item mb-3 d-flex gap-4 align-items-center justify-content-center">
                    <div className="img">
                        <img src={post_1} alt="post_1" />
                    </div>
                    <div className="person">
                        <h6><a href="#">From life was you fish...</a></h6>
                        <p>January 12, 2019 </p>
                    </div>
                </div>
                <div className="item mb-3 d-flex gap-4 align-items-center justify-content-center">
                    <div className="img">
                        <img src={post_2} alt="post_2" />
                    </div>
                    <div className="person">
                        <h6><a href="#">From life was you fish...</a></h6>
                        <p>January 12, 2019 </p>
                    </div>
                </div>
                <div className="item mb-3 d-flex gap-4 align-items-center justify-content-center">
                    <div className="img">
                        <img src={post_3} alt="post_3" />
                    </div>
                    <div className="person">
                        <h6><a href="#">From life was you fish...</a></h6>
                        <p>January 12, 2019 </p>
                    </div>
                </div>
                <div className="item mb-3 d-flex gap-4 align-items-center justify-content-center">
                    <div className="img">
                        <img src={post_4} alt="post_4" />
                    </div>
                    <div className="person">
                        <h6><a href="#">From life was you fish...</a></h6>
                        <p>January 12, 2019 </p>
                    </div>
                </div>
            </div>
            <div className="single-sidebar-div">
                <h4>Tag Clouds</h4>
                <p>
                    <a href="#">project</a>
                    <a href="#"> love</a>
                    <a href="#">technology</a>
                    <a href="#">travel</a>
                    <a href="#">restaurant</a>
                    <a href="#">life style</a>
                    <a href="#">design</a>
                    <a href="#">illustration</a>
                </p>
            </div>
            <div className="single-sidebar-div">
                <h4>Tag Clouds</h4>
                <ul className="list-images d-flex">
                    <li>
                        <a href="#"><img className="img-fluid" src={post_5} alt="post_5" /></a>
                    </li>
                    <li>
                        <a href="#"><img className="img-fluid" src={post_6} alt="post_6" /></a>
                    </li>
                    <li>
                        <a href="#"><img className="img-fluid" src={post_7} alt="post_7" /></a>
                    </li>
                    <li>
                        <a href="#"><img className="img-fluid" src={post_8} alt="post_8" /></a>
                    </li>
                    <li>
                        <a href="#"><img className="img-fluid" src={post_9} alt="post_9" /></a>
                    </li>
                    <li>
                        <a href="#"><img className="img-fluid" src={post_10} alt="post_10" /></a>
                    </li>
                </ul>
            </div>
            <div className="single-sidebar-div">
                <h4>Newsletter </h4>
                <div className="mb-3 mt-5 search-form">
                    <input type="text" className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter Email" />
                </div>
                <button className="text-uppercase btn-front w-100">subscribe</button>
            </div>
        </div>
    )
}
