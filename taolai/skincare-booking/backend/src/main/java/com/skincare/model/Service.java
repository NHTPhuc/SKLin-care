package com.skincare.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "services")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, length = 1000)
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private Integer durationMinutes;

    private String imageUrl;
    
    @Column(nullable = false)
    private boolean active = true;

    @OneToMany(mappedBy = "service")
    private Set<Appointment> appointments = new HashSet<>();
    
    @OneToMany(mappedBy = "service")
    private Set<Booking> bookings = new HashSet<>();
} 