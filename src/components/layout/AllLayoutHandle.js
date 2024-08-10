import React from 'react'
import Header from '../Header'
import { Outlet } from 'react-router-dom'
import Home from '../../pages/Home'
import Footer from '../Footer'

function AllLayoutHandle() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AllLayoutHandle