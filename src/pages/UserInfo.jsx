import React, { useEffect, useState } from 'react'
import img1 from "../img/team-1.jpg"
import Dropdown from './Dropdown'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import routingApi from '../routing'


function UserInfo() {
    const navigate = useNavigate()
    const [data, setData] = useState("")
    const paramId = useParams().id

    const getDataOfSingleUser = () => {
        try {
            axios.get(`${routingApi.getSingleUser.url}/${paramId}`).then((res) => {
                setData(res.data.body)
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDataOfSingleUser()
    }, [])

    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="d-flex justify-content-end mt-3">
                        <button className="btn btn-primary" onClick={goBack}>Go Back</button>
                    </div>
                    <div className="col-lg-3 col-md-6 pt-5">
                        <div className="boxContainer">
                            <h1 className="m-0 text-uppercase text-black">
                                <i className="fa fa-users text-black me-3" />
                                User
                            </h1>
                            <div className="dropdown-container">
                                <Dropdown />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-md-6 pt-5" style={{ marginBottom: "25px", width: "100%" }}>
                        <div className="d-flex justify-content-center boxContainer">
                            <div className="col-lg-4 col-md-6" style={{ margin: "25px" }}>
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
                                        <div className="mt-auto mb-3 d-flex flex-column">
                                            <h4 className="mb-1">Name:{data?.name} </h4>
                                            <h6 className="mb-2">Email:{data?.email}</h6>
                                            <h6 >Mobile:{data?.mobile}</h6>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default UserInfo