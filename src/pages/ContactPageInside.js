import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import routingApi from '../routing'
import axios from 'axios'
import { toast } from 'react-toastify'

function ContactPageInside() {
    
const [data,setData]=useState({
    name:"",
    email:"",
    subject:"",
    message:"",
})

const navigate=useNavigate()

const onChangeData=(e)=>{
    const {name,value}=e.target
setData({...data,[name]:value})
}

const onSubmitData=(e)=>{
    e.preventDefault()
    try {
        const dataSubC=axios.post(`${routingApi.contactUs.url}`,data).then((res)=>{
            if(res.data.status==200){
                setData(res.data.body)
                toast.success(res.data.message)
                navigate("/")
            }else{
                toast.error(res.data.message)
            }
        })
    } catch (error) {
        console.log(error)
    }
}

    return (
        <>
            <div
                className="container-fluid bg-primary py-5 bg-hero"
                style={{ marginBottom: 90 }}
            >
                <div className="container py-5">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 text-center text-lg-start">
                            <h1 className="display-1 text-dark">Contact Us</h1>
                            <div className="pt-2">
                                <Link to={"/"} className="btn btn-secondary rounded-pill py-2 px-4 mx-2">
                                    Home

                                </Link>
                                <a
                                    href=""
                                    className="btn btn-secondary rounded-pill py-2 px-4 mx-2"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h1 className="display-5">Please Feel Free To Contact Us</h1>
                        <hr className="w-25 mx-auto text-primary" style={{ opacity: 1 }} />
                    </div>
                    <div className="row g-3 mb-5">
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                                <div className="contact-icon p-3">
                                    <div>
                                        <i className="fa fa-2x fa-map-marker-alt" />
                                    </div>
                                </div>
                                <h4 className="mt-5">123 Street, New York, USA</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                                <div className="contact-icon p-3">
                                    <div>
                                        <i className="fa fa-2x fa-phone" />
                                    </div>
                                </div>
                                <h4 className="mt-5">+012 345 6789</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 pt-5">
                            <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                                <div className="contact-icon p-3">
                                    <div>
                                        <i className="fa fa-2x fa-envelope-open" />
                                    </div>
                                </div>
                                <h4 className="mt-5">info@example.com</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{ height: 500 }}>
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                    frameBorder={0}
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex={0}
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="row justify-content-center position-relative"
                        style={{ marginTop: "-200px", zIndex: 1 }}
                    >
                        <div className="col-lg-8">
                            <div className="bg-primary p-5 m-5 mb-0">
                                <form onChange={onChangeData} onSubmit={onSubmitData} >
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="text"
                                                name='name'
                                                className="form-control bg-light border-0"
                                                placeholder="Your Name"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input
                                                type="email"
                                                name='email'
                                                className="form-control bg-light border-0"
                                                placeholder="Your Email"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <input
                                                type="text"
                                                name='subject'
                                                className="form-control bg-light border-0"
                                                placeholder="Subject"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control bg-light border-0"
                                                rows={5}
                                                name='message'
                                                placeholder="Message"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-secondary w-100 py-3"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="container-fluid bg-primary bg-call-to-action py-5"
                style={{ marginTop: 90 }}
            >
                <div className="container py-5">
                    <div className="row g-0 justify-content-start">
                        <div className="col-lg-6">
                            <h1 className="display-5 mb-4">Do You Have Any Project?</h1>
                            <p className="fs-4 fw-normal">
                                Dolores sed duo clita tempor justo dolor et stet lorem kasd labore
                                dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et
                                tempor diam tempor erat dolor rebum sit ipsum.
                            </p>
                            <a
                                href=""
                                className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPageInside