# Skincare Booking Application

A full-stack application for scheduling skincare appointments with an admin dashboard for management.

## Features

- User authentication and registration
- Appointment scheduling and management
- Service catalog with descriptions and pricing
- Admin dashboard for managing appointments, services, and users
- Responsive design using Tailwind CSS

## Tech Stack

### Backend
- Spring Boot 2.7.5
- Spring Data JPA for database operations
- Spring Security for authentication and authorization
- H2 In-memory Database (development)
- Lombok for reducing boilerplate code
- RESTful API design

### Frontend
- React.js (planned)
- HTML/CSS demo with Tailwind CSS
- JavaScript for interactivity
- Responsive design

## Quick Demo

Since this project requires build tools (npm for the frontend and Maven for the backend) which may not be installed on all systems, we've provided a simple HTML demo that showcases the application's UI and functionality.

### Running the Demo

1. Navigate to the skincare-booking directory in PowerShell:
   ```
   cd skincare-booking
   ```

2. Run the PowerShell script:
   ```
   .\run.ps1
   ```

This will open the demo in your default web browser.

## Backend API

The following RESTful endpoints are available:

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate a user

### Services
- `GET /api/services` - Get all services
- `GET /api/services/{id}` - Get a specific service
- `POST /api/services` - Create a new service (admin only)
- `PUT /api/services/{id}` - Update a service (admin only)
- `DELETE /api/services/{id}` - Delete a service (admin only)

### Appointments
- `POST /api/appointments` - Create a new appointment
- `GET /api/appointments/user` - Get current user's appointments
- `GET /api/appointments/{id}` - Get a specific appointment
- `PUT /api/appointments/{id}/status` - Update appointment status
- `GET /api/appointments/date-range` - Get appointments within a date range (admin only)

## Full Installation

For a complete installation with all functionality, the following prerequisites are needed:

- Java 17 or higher
- Maven

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd skincare-booking/backend
   ```

2. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```
   The backend will start on http://localhost:8080/skincare-booking

### API Testing

You can test the API endpoints using tools like Postman or curl. For example:

```
curl -X GET http://localhost:8080/skincare-booking/api/services
```

### Default Users

The application comes with pre-configured users:

1. Admin User
   - Username: admin
   - Password: admin123

2. Regular User
   - Username: user
   - Password: user123

## Screenshots

### Homepage
![Homepage](https://i.imgur.com/X5VbFvN.png)

### Services
![Services](https://i.imgur.com/7KjGZtP.png)

### Admin Dashboard
![Admin Dashboard](https://i.imgur.com/3Z0yTbv.png)

## License

MIT 