import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layouts
import MainLayout from './components/layouts/MainLayout';
import AdminLayout from './components/layouts/AdminLayout';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import MyAppointments from './pages/MyAppointments';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminServices from './pages/admin/Services';
import AdminAppointments from './pages/admin/Appointments';
import AdminUsers from './pages/admin/Users';

// Auth Guard
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    return isAuthenticated ? children : < Navigate to = "/login" / > ;
};

// Admin Guard
const AdminRoute = ({ children }) => {
    const isAdmin = localStorage.getItem('role') === 'ROLE_ADMIN';
    return isAdmin ? children : < Navigate to = "/" / > ;
};

function App() {
    return ( <
        >
        <
        ToastContainer position = "top-right"
        autoClose = { 3000 }
        hideProgressBar = { false }
        /> <
        Routes > { /* Public Routes */ } <
        Route path = "/"
        element = { < MainLayout / > } >
        <
        Route index element = { < Home / > }
        /> <
        Route path = "services"
        element = { < Services / > }
        /> <
        Route path = "services/:id"
        element = { < ServiceDetail / > }
        /> <
        Route path = "login"
        element = { < Login / > }
        /> <
        Route path = "register"
        element = { < Register / > }
        />

        { /* Protected Routes */ } <
        Route path = "booking"
        element = { <
            ProtectedRoute >
            <
            Booking / >
            <
            /ProtectedRoute>
        }
        /> <
        Route path = "profile"
        element = { <
            ProtectedRoute >
            <
            Profile / >
            <
            /ProtectedRoute>
        }
        /> <
        Route path = "my-appointments"
        element = { <
            ProtectedRoute >
            <
            MyAppointments / >
            <
            /ProtectedRoute>
        }
        /> < /
        Route >

        { /* Admin Routes */ } <
        Route path = "/admin"
        element = { <
            AdminRoute >
            <
            AdminLayout / >
            <
            /AdminRoute>
        } >
        <
        Route index element = { < AdminDashboard / > }
        /> <
        Route path = "services"
        element = { < AdminServices / > }
        /> <
        Route path = "appointments"
        element = { < AdminAppointments / > }
        /> <
        Route path = "users"
        element = { < AdminUsers / > }
        /> < /
        Route >

        { /* Not Found */ } <
        Route path = "*"
        element = { < Navigate to = "/"
            replace / >
        }
        /> < /
        Routes > <
        />
    );
}

export default App;