import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import headingIcon from '../img/icons/paint-palette.png'
import "./signup.css"
import routingApi from '../routing'
import axios from "axios"
import { toast } from 'react-toastify'
import Cookies from "js-cookie"

function AdminLogin() {

    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const onChangeData = (e) => {
        const { name, value } = e.target
        console.log(e.target, "ee")
        setData({ ...data, [name]: value })
    }

    const handleSubmitData = (e) => {
        e.preventDefault()
        try {
            const dataGet = axios.post(`${routingApi.adminLogin.url}`, data,).then((res) => {
                console.log(res.data, "kkk")
                if (res.data.status == 200) {
                    setData(res.data.body)
                    Cookies.set("userData", JSON.stringify(res.data.body))
                    toast.success(res.data.message)
                    navigate("/dashboard")
                } else {
                    toast.error(res.data.message)
                }
            }).catch((err) => {
                console.log(err, "err")
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="bg-light py-10 py-md-10 imgBackgroundAdmin" >
            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 ">
                    <div className="card border-0 rounded-3 shadow-none" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                    <div className="card-body p-3 p-md-4 p-xl-5 ">
                                <div className="text-center mb-3">
                                    <Link to="/" className="navbar-brand ms-4 ms-lg-0">
                                        <h1 className="text-primary m-0">
                                            <img className="me-3" style={{ height: "55px" }} src={headingIcon} alt="Icon" />
                                            Painter Admin
                                        </h1>
                                    </Link>
                                </div>
                                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                                    Sign in to your account
                                </h2>
                                <form onSubmit={handleSubmitData} onChange={onChangeData}>
                                    <div className="row gy-2 overflow-hidden">
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
                                            <div className="d-flex gap-2 justify-content-between">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="rememberMe"
                                                        id="rememberMe"
                                                    />
                                                    <label
                                                        className="form-check-label text-secondary"
                                                        htmlFor="rememberMe"
                                                    >
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                                <a href="#!" className="link-primary text-decoration-none">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <div className="d-grid my-3">
                                                <button className="btn btn-primary btn-lg" type="submit">
                                                    Log in
                                                </button>
                                            </div>
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

export default AdminLogin