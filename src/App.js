import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import components
import AllLayoutHandle from './components/layout/AllLayoutHandle';
import Home from './pages/Home';
import AboutPageInside from './pages/AboutPageInside';
import BlogPageInside from './pages/BlogPageInside';
import ContactPageInside from './pages/ContactPageInside';
import ServiceInsidePage from './pages/ServiceInsidePage';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminLogin from './pages/AdminLogin';
import UserTable from './pages/UserTable';
import Dashboard from './pages/Dashboard';
import ContactusTable from './pages/ContactusTable';
import ProtectedRoute from './pages/ProtectedRoute';
import UserInfo from './pages/UserInfo';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AllLayoutHandle />} >
          <Route path='/' element={<Home />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/aboutPageInside' element={<AboutPageInside />} />
          <Route path='/contactPageInside' element={<ContactPageInside />} />

          {/* Protected Routes */}
          <Route path='/blogPageInside' element={<ProtectedRoute element={<BlogPageInside />} />} />
          <Route path='/serviceInsidePage' element={<ProtectedRoute element={<ServiceInsidePage />} />} />
          <Route path='/blogDetail' element={<ProtectedRoute element={<BlogDetail />} />} />
          <Route path='/userTable' element={<ProtectedRoute element={<UserTable />} />} />
          <Route path='/dashboard' element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path='/contactusTable' element={<ProtectedRoute element={<ContactusTable />} />} />
          <Route path='/userInfo/:id' element={<ProtectedRoute element={<UserInfo />} />} />

        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
