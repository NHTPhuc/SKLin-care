import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featuredServices = [{
            id: 1,
            name: 'Facial Treatment',
            description: 'A comprehensive facial treatment that includes cleansing, exfoliation, extraction, and hydration.',
            image: '/images/facial-treatment.jpg',
        },
        {
            id: 2,
            name: 'Anti-Aging Treatment',
            description: 'Advanced treatment designed to reduce fine lines and wrinkles, and improve skin elasticity.',
            image: '/images/anti-aging.jpg',
        },
        {
            id: 3,
            name: 'Hydrating Facial',
            description: 'A moisturizing facial that replenishes dry, dehydrated skin for a glowing complexion.',
            image: '/images/hydrating-facial.jpg',
        },
    ];

    const testimonials = [{
            id: 1,
            name: 'Sarah Johnson',
            quote: 'The facial treatment was amazing! My skin feels so refreshed and looks noticeably brighter.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Michael Chen',
            quote: 'I\'ve tried many skincare services, but BeautySpa is by far the best. The staff is knowledgeable and the results are fantastic.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Emily Rodriguez',
            quote: 'The anti-aging treatment has made a significant difference in my skin. I look years younger!',
            rating: 4,
        },
    ];

    return ( <
        div > { /* Hero Section */ } <
        section className = "bg-gradient-to-r from-secondary-light to-accent-light" >
        <
        div className = "container mx-auto px-4 py-16 md:py-24" >
        <
        div className = "flex flex-col md:flex-row items-center" >
        <
        div className = "md:w-1/2 mb-8 md:mb-0" >
        <
        h1 className = "text-4xl md:text-5xl font-serif font-bold text-primary-800 mb-4" >
        Transform Your Skin with Premium Care <
        /h1> <
        p className = "text-lg text-primary-700 mb-6" >
        Experience the ultimate skincare treatments tailored to your unique needs.Our expert estheticians will help you achieve radiant, healthy skin. <
        /p> <
        div className = "flex flex-col sm:flex-row gap-4" >
        <
        Link to = "/services"
        className = "btn btn-primary text-center" >
        Explore Services <
        /Link> <
        Link to = "/booking"
        className = "btn btn-outline text-center" >
        Book Appointment <
        /Link> < /
        div > <
        /div> <
        div className = "md:w-1/2" >
        <
        img src = "/images/hero-image.jpg"
        alt = "Skincare treatment"
        className = "rounded-lg shadow-xl w-full h-auto object-cover" /
        >
        <
        /div> < /
        div > <
        /div> < /
        section >

        { /* Featured Services Section */ } <
        section className = "py-16 bg-white" >
        <
        div className = "container mx-auto px-4" >
        <
        div className = "text-center mb-12" >
        <
        h2 className = "text-3xl font-serif font-bold text-primary-800 mb-4" >
        Our Featured Services <
        /h2> <
        p className = "text-lg text-primary-600 max-w-2xl mx-auto" >
        Discover our most popular skincare treatments designed to rejuvenate and enhance your natural beauty. <
        /p> < /
        div > <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > {
            featuredServices.map((service) => ( <
                div key = { service.id }
                className = "service-card" >
                <
                img src = { service.image }
                alt = { service.name }
                className = "service-card-img" /
                >
                <
                div className = "service-card-body" >
                <
                h3 className = "service-card-title" > { service.name } < /h3> <
                p className = "text-primary-600 mb-4" > { service.description } < /p> <
                Link to = { `/services/${service.id}` }
                className = "btn btn-outline w-full text-center" >
                Learn More <
                /Link> < /
                div > <
                /div>
            ))
        } <
        /div> <
        div className = "text-center mt-10" >
        <
        Link to = "/services"
        className = "btn btn-primary" >
        View All Services <
        /Link> < /
        div > <
        /div> < /
        section >

        { /* About Us Section */ } <
        section className = "py-16 bg-primary-50" >
        <
        div className = "container mx-auto px-4" >
        <
        div className = "flex flex-col md:flex-row items-center" >
        <
        div className = "md:w-1/2 mb-8 md:mb-0" >
        <
        img src = "/images/about-us.jpg"
        alt = "Our skincare clinic"
        className = "rounded-lg shadow-lg w-full h-auto" /
        >
        <
        /div> <
        div className = "md:w-1/2 md:pl-12" >
        <
        h2 className = "text-3xl font-serif font-bold text-primary-800 mb-4" >
        About BeautySpa <
        /h2> <
        p className = "text-lg text-primary-700 mb-4" >
        Founded with a passion
        for skincare excellence, BeautySpa has been transforming the way people care
        for their skin since 2010. <
        /p> <
        p className = "text-lg text-primary-700 mb-6" >
        Our team of certified estheticians is committed to providing personalized skincare solutions using the highest quality products and advanced techniques. <
        /p> <
        div className = "grid grid-cols-2 gap-4" >
        <
        div className = "flex items-center" >
        <
        div className = "bg-accent-DEFAULT w-10 h-10 rounded-full flex items-center justify-center mr-3" >
        <
        span className = "text-white font-bold" > 10 + < /span> < /
        div > <
        span className = "text-primary-700" > Years Experience < /span> < /
        div > <
        div className = "flex items-center" >
        <
        div className = "bg-accent-DEFAULT w-10 h-10 rounded-full flex items-center justify-center mr-3" >
        <
        span className = "text-white font-bold" > 5 k + < /span> < /
        div > <
        span className = "text-primary-700" > Happy Clients < /span> < /
        div > <
        div className = "flex items-center mt-4" >
        <
        div className = "bg-accent-DEFAULT w-10 h-10 rounded-full flex items-center justify-center mr-3" >
        <
        span className = "text-white font-bold" > 15 + < /span> < /
        div > <
        span className = "text-primary-700" > Expert Staff < /span> < /
        div > <
        div className = "flex items-center mt-4" >
        <
        div className = "bg-accent-DEFAULT w-10 h-10 rounded-full flex items-center justify-center mr-3" >
        <
        span className = "text-white font-bold" > 20 + < /span> < /
        div > <
        span className = "text-primary-700" > Services < /span> < /
        div > <
        /div> < /
        div > <
        /div> < /
        div > <
        /section>

        { /* Testimonials Section */ } <
        section className = "py-16 bg-white" >
        <
        div className = "container mx-auto px-4" >
        <
        div className = "text-center mb-12" >
        <
        h2 className = "text-3xl font-serif font-bold text-primary-800 mb-4" >
        What Our Clients Say <
        /h2> <
        p className = "text-lg text-primary-600 max-w-2xl mx-auto" >
        Don 't just take our word for it - hear what our satisfied clients have to say about their experiences. < /
        p > <
        /div> <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > {
            testimonials.map((testimonial) => ( <
                div key = { testimonial.id }
                className = "bg-primary-50 p-6 rounded-lg shadow-md" >
                <
                div className = "flex items-center mb-4" > {
                    [...Array(5)].map((_, i) => ( <
                        svg key = { i }
                        className = { `w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }` }
                        fill = "currentColor"
                        viewBox = "0 0 20 20"
                        xmlns = "http://www.w3.org/2000/svg" >
                        <
                        path d = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" / >
                        <
                        /svg>
                    ))
                } <
                /div> <
                p className = "text-primary-700 italic mb-4" > "{testimonial.quote}" < /p> <
                p className = "text-primary-800 font-semibold" > { testimonial.name } < /p> < /
                div >
            ))
        } <
        /div> < /
        div > <
        /section>

        { /* CTA Section */ } <
        section className = "py-12 bg-secondary-DEFAULT" >
        <
        div className = "container mx-auto px-4 text-center" >
        <
        h2 className = "text-3xl font-serif font-bold text-white mb-4" >
        Ready to Experience the Best in Skincare ?
        <
        /h2> <
        p className = "text-lg text-white mb-8 max-w-2xl mx-auto" >
        Book your appointment today and take the first step towards healthier, more radiant skin. <
        /p> <
        Link to = "/booking"
        className = "btn bg-white text-secondary-dark hover:bg-gray-100" >
        Book Your Appointment <
        /Link> < /
        div > <
        /section> < /
        div >
    );
};

export default Home;