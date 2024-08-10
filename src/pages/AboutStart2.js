import React from 'react'
import about1 from "../img/about-1.jpg"
import about2 from "../img/about-2.jpg"
import { Link } from 'react-router-dom'
function AboutStart2() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row gx-0 mb-3 mb-lg-0">
                    <div className="col-lg-6 my-lg-5 py-lg-5">
                        <div className="about-start bg-primary p-5">
                            <h1 className="display-5 mb-4">Welcome To Painter</h1>
                            <p>
                                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et,
                                tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem et
                                sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
                                magna dolore erat amet{" "}
                            </p>
                            <Link to={"/contactPageInside"} className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{ minHeight: 400 }}>
                        <div className="position-relative h-100">
                            <img
                                className="position-absolute w-100 h-100"
                                src={about1}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </div>
                <div className="row gx-0">
                    <div className="col-lg-6" style={{ minHeight: 400 }}>
                        <div className="position-relative h-100">
                            <img
                                className="position-absolute w-100 h-100"
                                src={about2}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 my-lg-5 py-lg-5">
                        <div className="about-end bg-primary p-5">
                            <h1 className="display-5 mb-4">Why Choose Us?</h1>
                            <p>
                                Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et,
                                tempor sit sit diam amet et eos labore. Clita erat ipsum et lorem et
                                sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor
                                magna dolore erat amet{" "}
                            </p>
                            <a
                                href=""
                                className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
                            >
                                Get A Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutStart2