import "./AboutCards.css"
import img_1 from "../../images/3column1.jpg"
import img_2 from "../../images/3column2.jpg"
import img_3 from "../../images/3column3.jpg"
export default function AboutCards() {
    return (
        <>
            <div className="container my-5 pt-4">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={img_1} className="card-img-top" alt="card-1" />
                            <div className="card-body">
                                <h5 className="card-title">What we really do?</h5>
                                <p className="card-text">
                                    Donec libero dolor, tincidunt id laoreet vitae,
                                    ullamcorper eu tortor. Maecenas pellentesque,
                                    dui vitae iaculis mattis, tortor nisi faucibus magna,
                                    vitae ultrices lacus purus vitae metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card">
                            <img src={img_2} className="card-img-top" alt="card-2" />
                            <div className="card-body">
                                <h5 className="card-title">What we really do?</h5>
                                <p className="card-text">
                                    Donec libero dolor, tincidunt id laoreet vitae,
                                    ullamcorper eu tortor. Maecenas pellentesque,
                                    dui vitae iaculis mattis, tortor nisi faucibus magna,
                                    vitae ultrices lacus purus vitae metus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card text-center">
                            <img src={img_3} className="card-img-top" alt="card-3" />
                            <div className="card-body">
                                <h5 className="card-title">What we really do?</h5>
                                <p className="card-text">
                                    Donec libero dolor, tincidunt id laoreet vitae,
                                    ullamcorper eu tortor. Maecenas pellentesque,
                                    dui vitae iaculis mattis, tortor nisi faucibus magna,
                                    vitae ultrices lacus purus vitae metus.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
