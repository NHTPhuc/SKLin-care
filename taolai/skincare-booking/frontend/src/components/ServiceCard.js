import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return ( <
        div className = "service-card h-full flex flex-col" >
        <
        img src = { service.imageUrl || '/images/service-placeholder.jpg' }
        alt = { service.name }
        className = "service-card-img" /
        >
        <
        div className = "service-card-body flex-grow flex flex-col" >
        <
        h3 className = "service-card-title" > { service.name } < /h3> <
        p className = "text-primary-600 mb-4 flex-grow" > { service.description } < /p> <
        div className = "flex items-center justify-between mb-4" >
        <
        div className = "font-bold text-lg text-primary-700" > $ { service.price.toFixed(2) } < /div> <
        div className = "text-sm text-primary-500" > { service.durationMinutes }
        min < /div> < /
        div > <
        Link to = { `/services/${service.id}` }
        className = "btn btn-outline w-full text-center mt-auto" >
        View Details <
        /Link> < /
        div > <
        /div>
    );
};

export default ServiceCard;