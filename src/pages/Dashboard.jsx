import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <div className="row g-3 mb-5" style={{ margin: "25px", display: "flex", justifyContent: "space-evenly" }}>
                <div className="col-lg-3 col-md-6 pt-5">
                    <div className="boxContainer">
                        <h1 className="m-0 text-uppercase text-black">
                            <i className="fa fa-tachometer-alt text-black me-3" />
                            Dashboard
                        </h1>
                        <div className="dropdown-container">
                            <Dropdown /></div>
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 pt-5">
                    <Link to={"/userTable"}>
                        <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                            <div className="contact-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-user" />
                                </div>
                            </div>
                            <h4 className="mt-5">Users</h4>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-3 col-md-6 pt-5">
                    <Link to={"/contactusTable"}>
                        <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                            <div className="contact-icon p-3">
                                <div>
                                    <i className="fa fa-2x fa-phone" />
                                </div>
                            </div>
                            <h4 className="mt-5">Contact Us</h4>
                        </div>
                    </Link>

                </div>


            </div>

        </>
    )
}

export default Dashboard