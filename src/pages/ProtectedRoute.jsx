// src/components/ProtectedRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ element }) => {
    const getData = Cookies.get("userData");
    const userData = getData ? JSON.parse(getData) : null;

    return userData ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
