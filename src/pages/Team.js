import React from 'react'
import img1 from "../img/team-1.jpg"
import img2 from "../img/team-2.jpg"
import img3 from "../img/team-3.jpg"
function Team() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                    <h1 className="display-5">Dedicated Team Members</h1>
                    <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                </div>
                <div className="row g-3">
                    <div className="col-lg-4 col-md-6">
                        <div className="team-item">
                            <img className="img-fluid w-100" src={img1} alt="" />
                            <div className="team-text">
                                <div className="team-social">
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                                <div className="mt-auto mb-3">
                                    <h4 className="mb-1">Full Name</h4>
                                    <span className="text-uppercase">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-item">
                            <img className="img-fluid w-100" src={img2} alt="" />
                            <div className="team-text">
                                <div className="team-social">
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                                <div className="mt-auto mb-3">
                                    <h4 className="mb-1">Full Name</h4>
                                    <span className="text-uppercase">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="team-item">
                            <img className="img-fluid w-100" src={img3} alt="" />
                            <div className="team-text">
                                <div className="team-social">
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        className="btn btn-lg btn-secondary btn-lg-square rounded-circle me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </div>
                                <div className="mt-auto mb-3">
                                    <h4 className="mb-1">Full Name</h4>
                                    <span className="text-uppercase">Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team