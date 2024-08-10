import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import routingApi from '../routing'
import axios from 'axios'


function ContactusTable() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getUserDetail = () => {
        try {
            axios.get(`${routingApi.getAllContactUs.url}`).then((res) => {
                console.log(res.data)
                setData(res.data.body)
            }).catch((err) => {
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUserDetail()
    }, [])

    const goBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {/* Sidebar or other content occupying 3 columns */}
                    <div className="col-lg-3 col-md-6 pt-5">
                    <div className="boxContainer">
                        <h1 className="m-0 text-uppercase text-black">
                        <i className="fa fa-phone text-black me-3" />
                        Contact Us
                        </h1>
                        <div className="dropdown-container">
                            <Dropdown /></div>
                    </div>

                </div>
                    <div className="col-xxl-9 col-md-6 pt-5" style={{ marginBottom: "25px" }}>
                        <div className="d-flex justify-content-center">
                        <div className='boxContainer' style={{ width: "100%"}}>
                        <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Subject</th>
                                            <th scope="col">Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((e, index) => (
                                            <tr key={e?._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{e?.name}</td>
                                                <td>{e?.email}</td>                                              
                                                <td>{e?.subject}</td>
                                                <td>{e?.message}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end mt-3">
                            <button className="btn btn-primary" onClick={goBack}>Go Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactusTable