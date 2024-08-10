import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from './Dropdown'
import axios from 'axios'
import routingApi from '../routing'


function UserTable() {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getUserDetail = () => {
        try {
            axios.get(`${routingApi.getAllUsers.url}`).then((res) => {
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

const handleClick=(id)=>{
    navigate(`/userInfo/${id}`)
}

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 pt-5">
                        <div className="boxContainer">
                            <h1 className="m-0 text-uppercase text-black">
                                <i className="fa fa-users text-black me-3" />
                                Users
                            </h1>
                            <div className="dropdown-container">
                                <Dropdown /></div>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-md-6 pt-5" style={{ marginBottom: "25px" }}>
                        <div className="d-flex justify-content-center">
                            <div className='boxContainer' style={{ width: "100%" }}>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((e, index) => (
                                            <tr key={e?._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{e?.name}</td>
                                                <td>{e?.email}</td>
                                                <td>{e?.mobile}</td>
                                                <td>
                                                    <div>
                                                        <button
                                                            className="btn"
                                                            onClick={() =>
                                                               handleClick(e?._id)
                                                            }
                                                        >
                                                           <i className="bi bi-eye text-secondary me-2" />
                                                        </button>
                                                        <button className="btn " onClick={goBack}>
                                                        <i className="bi bi-trash text-secondary me-2" />
                                                        </button>
                                                    </div>
                                                </td>


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

export default UserTable