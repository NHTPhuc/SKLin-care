package com.skincare.service;

import com.skincare.model.Booking;

import java.util.List;
import java.util.Optional;

public interface BookingService {
    
    /**
     * Create a new booking
     */
    Booking createBooking(Booking booking);
    
    /**
     * Get all bookings
     */
    List<Booking> getAllBookings();
    
    /**
     * Get booking by ID
     */
    Optional<Booking> getBookingById(Long id);
    
    /**
     * Get bookings by username
     */
    List<Booking> getBookingsByUsername(String username);
    
    /**
     * Update an existing booking
     */
    Booking updateBooking(Booking booking);
    
    /**
     * Delete a booking
     */
    void deleteBooking(Long id);
} 