import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {
    CalendarIcon,
    UserGroupIcon,
    BuildingStorefrontIcon,
    CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalAppointments: 0,
        pendingAppointments: 0,
        totalServices: 0,
        totalUsers: 0,
        revenue: 0
    });
    const [recentAppointments, setRecentAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async() => {
            try {
                // Uncomment when backend is ready
                // const statsResponse = await axios.get('/api/admin/stats');
                // const appointmentsResponse = await axios.get('/api/admin/appointments/recent');
                // setStats(statsResponse.data);
                // setRecentAppointments(appointmentsResponse.data);

                // Mock data for development
                setStats({
                    totalAppointments: 156,
                    pendingAppointments: 23,
                    totalServices: 8,
                    totalUsers: 120,
                    revenue: 12450
                });

                setRecentAppointments([{
                        id: 1,
                        service: {
                            id: 1,
                            name: 'Facial Treatment'
                        },
                        user: {
                            id: 2,
                            fullName: 'Jane Smith'
                        },
                        appointmentDateTime: '2023-07-01T14:00:00',
                        status: 'CONFIRMED'
                    },
                    {
                        id: 2,
                        service: {
                            id: 3,
                            name: 'Anti-Aging Treatment'
                        },
                        user: {
                            id: 5,
                            fullName: 'Robert Johnson'
                        },
                        appointmentDateTime: '2023-07-02T10:30:00',
                        status: 'PENDING'
                    },
                    {
                        id: 3,
                        service: {
                            id: 2,
                            name: 'Deep Cleansing'
                        },
                        user: {
                            id: 8,
                            fullName: 'Maria Garcia'
                        },
                        appointmentDateTime: '2023-07-02T16:00:00',
                        status: 'CONFIRMED'
                    },
                    {
                        id: 4,
                        service: {
                            id: 5,
                            name: 'Hydrating Facial'
                        },
                        user: {
                            id: 12,
                            fullName: 'Alex Chen'
                        },
                        appointmentDateTime: '2023-07-03T11:00:00',
                        status: 'PENDING'
                    }
                ]);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
                toast.error('Failed to load dashboard data. Please try again later.');
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    // Format date and time
    const formatDateTime = (dateTimeString) => {
        const options = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateTimeString).toLocaleDateString('en-US', options);
    };

    // Status badge component
    const StatusBadge = ({ status }) => {
        let bgColor = '';

        switch (status) {
            case 'CONFIRMED':
                bgColor = 'bg-green-100 text-green-800';
                break;
            case 'PENDING':
                bgColor = 'bg-yellow-100 text-yellow-800';
                break;
            case 'COMPLETED':
                bgColor = 'bg-blue-100 text-blue-800';
                break;
            case 'CANCELLED':
                bgColor = 'bg-red-100 text-red-800';
                break;
            default:
                bgColor = 'bg-gray-100 text-gray-800';
        }

        return ( <
            span className = { `px-2 py-1 rounded-full text-xs font-medium ${bgColor}` } > { status } <
            /span>
        );
    };

    return ( <
        div >
        <
        h1 className = "text-2xl font-serif font-bold text-primary-800 mb-6" > Admin Dashboard < /h1>

        {
            loading ? ( <
                div className = "flex justify-center items-center h-64" >
                <
                div className = "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-DEFAULT" > < /div> < /
                div >
            ) : ( <
                >
                { /* Stats Cards */ } <
                div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8" >
                <
                div className = "bg-white rounded-lg shadow-md p-6" >
                <
                div className = "flex items-center" >
                <
                div className = "bg-accent-light p-3 rounded-full" >
                <
                CalendarIcon className = "h-6 w-6 text-accent-dark" / >
                <
                /div> <
                div className = "ml-4" >
                <
                h3 className = "text-sm font-medium text-primary-500" > Total Appointments < /h3> <
                p className = "text-2xl font-semibold text-primary-800" > { stats.totalAppointments } < /p> < /
                div > <
                /div> <
                div className = "mt-2" >
                <
                span className = "text-sm text-yellow-600" > { stats.pendingAppointments }
                pending < /span> < /
                div > <
                /div>

                <
                div className = "bg-white rounded-lg shadow-md p-6" >
                <
                div className = "flex items-center" >
                <
                div className = "bg-secondary-light p-3 rounded-full" >
                <
                BuildingStorefrontIcon className = "h-6 w-6 text-secondary-dark" / >
                <
                /div> <
                div className = "ml-4" >
                <
                h3 className = "text-sm font-medium text-primary-500" > Services < /h3> <
                p className = "text-2xl font-semibold text-primary-800" > { stats.totalServices } < /p> < /
                div > <
                /div> <
                div className = "mt-2" >
                <
                span className = "text-sm text-primary-500" > Available services < /span> < /
                div > <
                /div>

                <
                div className = "bg-white rounded-lg shadow-md p-6" >
                <
                div className = "flex items-center" >
                <
                div className = "bg-accent-light p-3 rounded-full" >
                <
                UserGroupIcon className = "h-6 w-6 text-accent-dark" / >
                <
                /div> <
                div className = "ml-4" >
                <
                h3 className = "text-sm font-medium text-primary-500" > Clients < /h3> <
                p className = "text-2xl font-semibold text-primary-800" > { stats.totalUsers } < /p> < /
                div > <
                /div> <
                div className = "mt-2" >
                <
                span className = "text-sm text-primary-500" > Registered users < /span> < /
                div > <
                /div>

                <
                div className = "bg-white rounded-lg shadow-md p-6" >
                <
                div className = "flex items-center" >
                <
                div className = "bg-secondary-light p-3 rounded-full" >
                <
                CurrencyDollarIcon className = "h-6 w-6 text-secondary-dark" / >
                <
                /div> <
                div className = "ml-4" >
                <
                h3 className = "text-sm font-medium text-primary-500" > Revenue < /h3> <
                p className = "text-2xl font-semibold text-primary-800" > $ { stats.revenue.toLocaleString() } < /p> < /
                div > <
                /div> <
                div className = "mt-2" >
                <
                span className = "text-sm text-primary-500" > Total earnings < /span> < /
                div > <
                /div> < /
                div >

                { /* Recent Appointments */ } <
                div className = "bg-white rounded-lg shadow-md overflow-hidden" >
                <
                div className = "px-6 py-4 border-b border-gray-200" >
                <
                h2 className = "text-lg font-medium text-primary-800" > Recent Appointments < /h2> < /
                div > <
                div className = "overflow-x-auto" >
                <
                table className = "min-w-full divide-y divide-gray-200" >
                <
                thead className = "bg-gray-50" >
                <
                tr >
                <
                th scope = "col"
                className = "px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider" >
                ID <
                /th> <
                th scope = "col"
                className = "px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider" >
                Service <
                /th> <
                th scope = "col"
                className = "px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider" >
                Client <
                /th> <
                th scope = "col"
                className = "px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider" >
                Date & Time <
                /th> <
                th scope = "col"
                className = "px-6 py-3 text-left text-xs font-medium text-primary-500 uppercase tracking-wider" >
                Status <
                /th> < /
                tr > <
                /thead> <
                tbody className = "bg-white divide-y divide-gray-200" > {
                    recentAppointments.map((appointment) => ( <
                        tr key = { appointment.id }
                        className = "hover:bg-gray-50" >
                        <
                        td className = "px-6 py-4 whitespace-nowrap text-sm text-primary-500" > #{ appointment.id } <
                        /td> <
                        td className = "px-6 py-4 whitespace-nowrap" >
                        <
                        div className = "text-sm font-medium text-primary-800" > { appointment.service.name } <
                        /div> < /
                        td > <
                        td className = "px-6 py-4 whitespace-nowrap" >
                        <
                        div className = "text-sm text-primary-700" > { appointment.user.fullName } <
                        /div> < /
                        td > <
                        td className = "px-6 py-4 whitespace-nowrap text-sm text-primary-700" > { formatDateTime(appointment.appointmentDateTime) } <
                        /td> <
                        td className = "px-6 py-4 whitespace-nowrap" >
                        <
                        StatusBadge status = { appointment.status }
                        /> < /
                        td > <
                        /tr>
                    ))
                } <
                /tbody> < /
                table > <
                /div> < /
                div > <
                />
            )
        } <
        /div>
    );
};

export default Dashboard;