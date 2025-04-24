package com.skincare.repository;

import com.skincare.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    
    /**
     * Find bookings by username, ordered by date and time
     */
    List<Booking> findByUsernameOrderByDateDescTimeDesc(String username);
    
    /**
     * Find bookings by date
     */
    List<Booking> findByDate(LocalDate date);
    
    /**
     * Find bookings by service ID
     */
    List<Booking> findByServiceId(Long serviceId);
    
    /**
     * Find bookings by status
     */
    List<Booking> findByStatus(String status);
} 