import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import headingIcon from '../img/icons/paint-palette.png'
import "./signup.css"
import axios from 'axios'
import routingApi from '../routing'
import { toast } from 'react-toastify'
function Signup() {

    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
    })

    const navigate = useNavigate()

    const onChangeData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const onSubmitData = (e) => {
        e.preventDefault()
        try {
            const dataSub = axios.post(`${routingApi.signUp.url}`, data).then((res) => {
                if (res.data.status == 200) {
                    setData(res.data.body)
                    toast.success(res.data.message)
                    navigate("/login")
                } else {
                    toast.error(res.data.message)
                }
            }).catch((err) => {
                console.log(err, "errrr")
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="bg-light py-10 py-md-10 imgBackground" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card border border-light-subtle rounded-3 shadow-sm">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                                <div className="text-center mb-3">
                                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                                        <h1 className="text-primary m-0">
                                            <img className="me-3" style={{ height: "55px" }} src={headingIcon} alt="Icon" />
                                            Painter
                                        </h1>
                                    </Link>
                                </div>
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                                    Sign in to your account
                                </h2>
                                <form onSubmit={onSubmitData} onChange={onChangeData}>
                                    <div className="row gy-2 overflow-hidden">
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="your full name"

                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">
                                                    Full Name
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="name@example.com"

                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    name="mobile"
                                                    id="mobile"
                                                    placeholder="your phone number"

                                                    required
                                                />
                                                <label htmlFor="email" className="form-label">
                                                    Mobile
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="password"
                                                    id="password"
                                                    placeholder="Password"

                                                    required
                                                />
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                </label>
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                            <div className="form-floating mb-3">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    placeholder="Confirm Password"
                                                    
                                                    required
                                                />
                                                <label htmlFor="confirmPassword" className="form-label">
                                                    Confirm Password
                                                </label>
                                            </div>
                                        </div> */}

                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button className="btn btn-primary btn-lg" type="submit">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <p className="m-0 text-secondary text-center">
                                                Already have an account?{' '}
                                                <Link to="/login" className="link-primary text-decoration-none">
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Signup