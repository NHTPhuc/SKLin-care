import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async() => {
            try {
                const response = await axios.get('/api/services');
                setServices(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching services:', error);
                toast.error('Failed to load services. Please try again later.');
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    // Placeholder data for development
    const placeholderServices = [{
            id: 1,
            name: 'Facial Treatment',
            description: 'A comprehensive facial treatment that includes cleansing, exfoliation, extraction, and hydration to rejuvenate your skin.',
            price: 80.00,
            durationMinutes: 60,
            imageUrl: '/images/facial-treatment.jpg',
        },
        {
            id: 2,
            name: 'Deep Cleansing',
            description: 'A deep cleansing treatment that removes impurities and unclogs pores for a refreshed complexion.',
            price: 65.00,
            durationMinutes: 45,
            imageUrl: '/images/deep-cleansing.jpg',
        },
        {
            id: 3,
            name: 'Anti-Aging Treatment',
            description: 'An advanced treatment designed to reduce fine lines and wrinkles, and improve skin elasticity.',
            price: 120.00,
            durationMinutes: 75,
            imageUrl: '/images/anti-aging.jpg',
        },
        {
            id: 4,
            name: 'Acne Treatment',
            description: 'A specialized treatment targeting acne-prone skin, reducing inflammation and preventing future breakouts.',
            price: 90.00,
            durationMinutes: 60,
            imageUrl: '/images/acne-treatment.jpg',
        },
        {
            id: 5,
            name: 'Hydrating Facial',
            description: 'A moisturizing facial that replenishes dry, dehydrated skin for a glowing complexion.',
            price: 75.00,
            durationMinutes: 50,
            imageUrl: '/images/hydrating-facial.jpg',
        }
    ];

    return ( <
        div className = "py-10" >
        <
        div className = "container mx-auto px-4" >
        <
        div className = "text-center mb-12" >
        <
        h1 className = "text-4xl font-serif font-bold text-primary-800 mb-4" > Our Services < /h1> <
        p className = "text-lg text-primary-600 max-w-2xl mx-auto" >
        Discover our range of premium skincare treatments tailored to address your unique skin concerns and goals. <
        /p> < /
        div >

        {
            loading ? ( <
                div className = "flex justify-center items-center h-64" >
                <
                div className = "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent-DEFAULT" > < /div> < /
                div >
            ) : ( <
                div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > { /* Replace with actual data when API is ready */ } {
                    placeholderServices.map((service) => ( <
                        ServiceCard key = { service.id }
                        service = { service }
                        />
                    ))
                } <
                /div>
            )
        } <
        /div> < /
        div >
    );
};

export default Services;