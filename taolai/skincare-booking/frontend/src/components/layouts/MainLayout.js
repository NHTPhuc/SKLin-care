import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const MainLayout = () => {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        const navigate = useNavigate();
        const isAuthenticated = localStorage.getItem('token') !== null;
        const isAdmin = localStorage.getItem('role') === 'ROLE_ADMIN';

        const handleLogout = () => {
            localStorage.removeItem('token');
            localStorage.removeItem('role');
            navigate('/login');
        };

        return ( <
            div className = "flex flex-col min-h-screen" > { /* Header */ } <
            header className = "bg-white shadow-sm" >
            <
            nav className = "container mx-auto px-4 py-3" >
            <
            div className = "flex justify-between items-center" > { /* Logo */ } <
            Link to = "/"
            className = "flex items-center" >
            <
            span className = "text-2xl font-serif font-bold text-accent-dark" > Beauty < /span> <
            span className = "text-2xl font-serif font-bold text-secondary-DEFAULT" > Spa < /span> < /
            Link >

            { /* Desktop Menu */ } <
            div className = "hidden md:flex items-center space-x-4" >
            <
            Link to = "/"
            className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2" >
            Home <
            /Link> <
            Link to = "/services"
            className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2" >
            Services <
            /Link> {
            isAuthenticated ? ( <
                >
                <
                Link to = "/booking"
                className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2" >
                Book Now <
                /Link> <
                Link to = "/my-appointments"
                className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2" >
                My Appointments <
                /Link> <
                div className = "relative group" >
                <
                button className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2" >
                Account <
                /button> <
                div className = "absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block z-10" >
                <
                Link to = "/profile"
                className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
                Profile <
                /Link> {
                isAdmin && ( <
                    Link to = "/admin"
                    className = "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
                    Admin Dashboard <
                    /Link>
                )
            } <
            button onClick = { handleLogout }
            className = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" >
            Logout <
            /button> < /
            div > <
            /div> < /
            >
        ): ( <
            >
            <
            Link to = "/login"
            className = "btn btn-outline" >
            Login <
            /Link> <
            Link to = "/register"
            className = "btn btn-primary" >
            Register <
            /Link> < /
            >
        )
    } <
    /div>

{ /* Mobile Menu Button */ } <
div className = "md:hidden" >
    <
    button type = "button"
className = "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
onClick = {
        () => setMobileMenuOpen(!mobileMenuOpen)
    } > {
        mobileMenuOpen ? ( <
            XMarkIcon className = "h-6 w-6"
            aria - hidden = "true" / >
        ) : ( <
            Bars3Icon className = "h-6 w-6"
            aria - hidden = "true" / >
        )
    } <
    /button> < /
    div > <
    /div>

{ /* Mobile Menu */ } {
    mobileMenuOpen && ( <
        div className = "md:hidden mt-4" >
        <
        div className = "flex flex-col space-y-2 py-2" >
        <
        Link to = "/"
        className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
        onClick = {
            () => setMobileMenuOpen(false)
        } >
        Home <
        /Link> <
        Link to = "/services"
        className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
        onClick = {
            () => setMobileMenuOpen(false)
        } >
        Services <
        /Link> {
        isAuthenticated ? ( <
            >
            <
            Link to = "/booking"
            className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
            onClick = {
                () => setMobileMenuOpen(false)
            } >
            Book Now <
            /Link> <
            Link to = "/my-appointments"
            className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
            onClick = {
                () => setMobileMenuOpen(false)
            } >
            My Appointments <
            /Link> <
            Link to = "/profile"
            className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
            onClick = {
                () => setMobileMenuOpen(false)
            } >
            Profile <
            /Link> {
            isAdmin && ( <
                Link to = "/admin"
                className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
                onClick = {
                    () => setMobileMenuOpen(false)
                } >
                Admin Dashboard <
                /Link>
            )
        } <
        button onClick = {
            () => {
                handleLogout();
                setMobileMenuOpen(false);
            }
        }
        className = "text-left text-primary-700 hover:text-accent-DEFAULT px-3 py-2" >
        Logout <
        /button> < /
        >
    ): ( <
        >
        <
        Link to = "/login"
        className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
        onClick = {
            () => setMobileMenuOpen(false)
        } >
        Login <
        /Link> <
        Link to = "/register"
        className = "text-primary-700 hover:text-accent-DEFAULT px-3 py-2"
        onClick = {
            () => setMobileMenuOpen(false)
        } >
        Register <
        /Link> < /
        >
    )
} <
/div> < /
div >
)
} <
/nav> < /
header >

    { /* Main Content */ } <
    main className = "flex-grow" >
    <
    Outlet / >
    <
    /main>

{ /* Footer */ } <
footer className = "bg-primary-800 text-white py-8" >
    <
    div className = "container mx-auto px-4" >
    <
    div className = "grid grid-cols-1 md:grid-cols-3 gap-8" >
    <
    div >
    <
    h3 className = "text-xl font-serif font-bold mb-4" > BeautySpa < /h3> <
p className = "text-primary-200" >
    Premium skincare services
for all your beauty needs.We 're dedicated to making you look and feel your best. < /
    p > <
    /div> <
div >
    <
    h4 className = "text-lg font-serif font-bold mb-4" > Quick Links < /h4> <
ul className = "space-y-2" >
    <
    li >
    <
    Link to = "/"
className = "text-primary-200 hover:text-white" > Home < /Link> < /
    li > <
    li >
    <
    Link to = "/services"
className = "text-primary-200 hover:text-white" > Services < /Link> < /
    li > <
    li >
    <
    Link to = "/booking"
className = "text-primary-200 hover:text-white" > Book Appointment < /Link> < /
    li > <
    li >
    <
    Link to = "/login"
className = "text-primary-200 hover:text-white" > Login < /Link> < /
    li > <
    /ul> < /
    div > <
    div >
    <
    h4 className = "text-lg font-serif font-bold mb-4" > Contact Us < /h4> <
address className = "not-italic text-primary-200" >
    <
    p > 123 Beauty Street < /p> <
p > Skincare City, SC 12345 < /p> <
p className = "mt-2" > Phone: (123) 456 - 7890 < /p> <
p > Email: info @beautyspa.com < /p> < /
    address > <
    /div> < /
    div > <
    div className = "mt-8 pt-6 border-t border-primary-700 text-center text-primary-300" >
    <
    p > & copy; { new Date().getFullYear() }
BeautySpa.All rights reserved. < /p> < /
    div > <
    /div> < /
    footer > <
    /div>
);
};

export default MainLayout;