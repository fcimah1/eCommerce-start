import emp_1 from "../../images/au-team-1.jpg"
import emp_2 from "../../images/au-team-2.jpg"
import emp_3 from "../../images/au-team-3.jpg"
import emp_4 from "../../images/au-team-4.jpg"
import emp_5 from "../../images/au-team-5.jpg"
import emp_6 from "../../images/au-team-6.png"
export default function Employers() {
    const employer = [
        {
            image: emp_1,
            name: "Jane Doe",
            designation: "CEO",
            company: "SUAQ Company",
            location: "New York, USA",
        }, {
            image: emp_2,
            name: "Anna Baranov",
            designation: "Client Care",
            company: "SUAQ Company",
            location: "New York, USA",
        }, {
            image: emp_3,
            name: "Andrei Kowalsy",
            designation: "Support Boss",
            company: "SUAQ Company",
            location: "New York, USA",
        },
        {
            image: emp_4,
            name: "Pamela Doe",
            designation: "Packaking Girl",
            company: "SUAQ Company",
            location: "New York, USA",
        },
        {
            image: emp_5,
            name: "Susan McCain",
            designation: "Packaking Girl",
            company: "SUAQ Company",
            location: "New York, USA",
        }, {
            image: emp_6,
            name: "See Details",
            designation: "",
            company: "SUAQ Company",
            location: "New York, USA",
        }
    ]
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        employer.map((emp, index) => {
                            return (
                                <div key={index} className=" col-lg-2 col-md-3 col-sm-4 col-6">
                                    <div className="epmloyer">
                                        <div className="img">
                                            <img src={emp.image} className="rounded-circle"
                                                alt={emp.name} />
                                        </div>
                                        <div className="details text-center mt-3">
                                            <h4 className="fs-5">{emp.name}</h4>
                                            <p>{emp.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
