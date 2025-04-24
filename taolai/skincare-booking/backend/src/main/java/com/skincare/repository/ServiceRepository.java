package com.skincare.repository;

import com.skincare.model.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {
    
    /**
     * Find all active services
     */
    List<Service> findByActiveTrue();
    
    /**
     * Find services by name containing keyword
     */
    List<Service> findByNameContainingIgnoreCase(String keyword);
    
    /**
     * Find services by price range
     */
    List<Service> findByPriceBetween(Double minPrice, Double maxPrice);
} 