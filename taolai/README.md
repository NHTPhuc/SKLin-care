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
- Spring Boot
- Spring Data JPA
- Spring Security
- H2 Database (development)
- MySQL (production)

### Frontend
- React.js
- Tailwind CSS
- Axios for API communication
- React Router for navigation

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd skincare-booking/backend
   ```

2. Run the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```
   The backend will start on http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd skincare-booking/frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   The application will be available at http://localhost:3000

## Screenshots

### Homepage
![Homepage](screenshots/homepage.png)

### Booking Page
![Booking Page](screenshots/booking.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

## License

MIT 