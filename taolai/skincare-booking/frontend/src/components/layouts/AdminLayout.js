import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import {
    Bars3Icon,
    XMarkIcon,
    HomeIcon,
    CalendarIcon,
    UserGroupIcon,
    Cog6ToothIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/login');
    };

    const navigation = [
        { name: 'Dashboard', href: '/admin', icon: HomeIcon },
        { name: 'Services', href: '/admin/services', icon: Cog6ToothIcon },
        { name: 'Appointments', href: '/admin/appointments', icon: CalendarIcon },
        { name: 'Users', href: '/admin/users', icon: UserGroupIcon },
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return ( <
        div className = "flex h-screen bg-gray-100" > { /* Sidebar for mobile */ } <
        div className = { `fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? '' : 'hidden'}` } > { /* Background overlay */ } <
        div className = "fixed inset-0 bg-gray-600 bg-opacity-75"
        onClick = {
            () => setSidebarOpen(false)
        } >
        <
        /div>

        { /* Sidebar content */ } <
        div className = "relative flex flex-col w-full max-w-xs bg-primary-800 text-white" >
        <
        div className = "absolute top-0 right-0 -mr-12 pt-2" >
        <
        button type = "button"
        className = "ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        onClick = {
            () => setSidebarOpen(false)
        } >
        <
        XMarkIcon className = "h-6 w-6 text-white"
        aria - hidden = "true" / >
        <
        /button> < /
        div >

        <
        div className = "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto" >
        <
        div className = "flex items-center justify-center px-4" >
        <
        span className = "text-2xl font-serif font-bold text-accent-DEFAULT" > Admin < /span> <
        span className = "text-2xl font-serif font-bold text-white" > Panel < /span> < /
        div > <
        nav className = "mt-8 flex-1 px-2 space-y-1" > {
            navigation.map((item) => ( <
                Link key = { item.name }
                to = { item.href }
                className = { `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    isActive(item.href)
                      ? 'bg-accent-DEFAULT text-white'
                      : 'text-primary-100 hover:bg-primary-700'
                  }` } >
                <
                item.icon className = { `mr-3 h-6 w-6 ${
                      isActive(item.href) 
                        ? 'text-white' 
                        : 'text-primary-300 group-hover:text-primary-100'
                    }` }
                aria - hidden = "true" /
                >
                { item.name } <
                /Link>
            ))
        } <
        button onClick = { handleLogout }
        className = "group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-700 w-full text-left" >
        <
        ArrowRightOnRectangleIcon className = "mr-3 h-6 w-6 text-primary-300 group-hover:text-primary-100"
        aria - hidden = "true" /
        >
        Logout <
        /button> < /
        nav > <
        /div> <
        div className = "flex-shrink-0 flex p-4 border-t border-primary-700" >
        <
        Link to = "/"
        className = "group block w-full" >
        <
        div className = "flex items-center" >
        <
        div >
        <
        p className = "text-sm font-medium text-white" > Back to Site < /p> < /
        div > <
        /div> < /
        Link > <
        /div> < /
        div > <
        /div>

        { /* Static sidebar for desktop */ } <
        div className = "hidden md:flex md:flex-shrink-0" >
        <
        div className = "flex flex-col w-64" >
        <
        div className = "flex flex-col h-0 flex-1 bg-primary-800 text-white" >
        <
        div className = "flex-1 flex flex-col pt-5 pb-4 overflow-y-auto" >
        <
        div className = "flex items-center justify-center px-4" >
        <
        span className = "text-2xl font-serif font-bold text-accent-DEFAULT" > Admin < /span> <
        span className = "text-2xl font-serif font-bold text-white" > Panel < /span> < /
        div > <
        nav className = "mt-8 flex-1 px-2 space-y-1" > {
            navigation.map((item) => ( <
                Link key = { item.name }
                to = { item.href }
                className = { `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                      isActive(item.href)
                        ? 'bg-accent-DEFAULT text-white'
                        : 'text-primary-100 hover:bg-primary-700'
                    }` } >
                <
                item.icon className = { `mr-3 h-6 w-6 ${
                        isActive(item.href) 
                          ? 'text-white' 
                          : 'text-primary-300 group-hover:text-primary-100'
                      }` }
                aria - hidden = "true" /
                >
                { item.name } <
                /Link>
            ))
        } <
        button onClick = { handleLogout }
        className = "group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-700 w-full text-left" >
        <
        ArrowRightOnRectangleIcon className = "mr-3 h-6 w-6 text-primary-300 group-hover:text-primary-100"
        aria - hidden = "true" /
        >
        Logout <
        /button> < /
        nav > <
        /div> <
        div className = "flex-shrink-0 flex p-4 border-t border-primary-700" >
        <
        Link to = "/"
        className = "group block w-full" >
        <
        div className = "flex items-center" >
        <
        div >
        <
        p className = "text-sm font-medium text-white" > Back to Site < /p> < /
        div > <
        /div> < /
        Link > <
        /div> < /
        div > <
        /div> < /
        div >

        { /* Main content */ } <
        div className = "flex flex-col flex-1 overflow-hidden" > { /* Top navigation */ } <
        div className = "md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white shadow-sm" >
        <
        button type = "button"
        className = "-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-DEFAULT"
        onClick = {
            () => setSidebarOpen(true)
        } >
        <
        span className = "sr-only" > Open sidebar < /span> <
        Bars3Icon className = "h-6 w-6"
        aria - hidden = "true" / >
        <
        /button> < /
        div >

        <
        main className = "flex-1 relative overflow-y-auto focus:outline-none" >
        <
        div className = "py-6" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 md:px-8" >
        <
        Outlet / >
        <
        /div> < /
        div > <
        /main> < /
        div > <
        /div>
    );
};

export default AdminLayout;