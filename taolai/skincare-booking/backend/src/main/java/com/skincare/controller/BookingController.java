package com.skincare.controller;

import com.skincare.model.Booking;
import com.skincare.model.Service;
import com.skincare.service.BookingService;
import com.skincare.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private ServiceService serviceService;

    /**
     * Health check endpoint to verify API is working
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "UP");
        response.put("message", "API is running");
        return ResponseEntity.ok(response);
    }

    /**
     * Get all services for booking
     */
    @GetMapping("/services")
    public ResponseEntity<List<Service>> getAllServices() {
        List<Service> services = serviceService.getAllActiveServices();
        return ResponseEntity.ok(services);
    }

    /**
     * Get a specific service by ID
     */
    @GetMapping("/services/{id}")
    public ResponseEntity<Service> getServiceById(@PathVariable("id") Long id) {
        return serviceService.getServiceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Create a new booking
     */
    @PostMapping("/bookings")
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        Booking savedBooking = bookingService.createBooking(booking);
        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    /**
     * Get all bookings for the current user
     */
    @GetMapping("/bookings/user/{username}")
    public ResponseEntity<List<Booking>> getUserBookings(@PathVariable("username") String username) {
        List<Booking> bookings = bookingService.getBookingsByUsername(username);
        return ResponseEntity.ok(bookings);
    }

    /**
     * Get a specific booking by ID
     */
    @GetMapping("/bookings/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Update a booking
     */
    @PutMapping("/bookings/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable("id") Long id, @RequestBody Booking booking) {
        return bookingService.getBookingById(id)
                .map(existingBooking -> {
                    booking.setId(id);
                    return ResponseEntity.ok(bookingService.updateBooking(booking));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Cancel a booking
     */
    @PutMapping("/bookings/{id}/cancel")
    public ResponseEntity<Booking> cancelBooking(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id)
                .map(booking -> {
                    booking.setStatus("Đã hủy");
                    return ResponseEntity.ok(bookingService.updateBooking(booking));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * Delete a booking
     */
    @DeleteMapping("/bookings/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable("id") Long id) {
        return bookingService.getBookingById(id)
                .map(booking -> {
                    bookingService.deleteBooking(id);
                    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
                })
                .orElse(ResponseEntity.notFound().build());
    }
} 