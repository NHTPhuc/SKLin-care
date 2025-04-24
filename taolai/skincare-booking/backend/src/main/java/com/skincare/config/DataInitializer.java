package com.skincare.config;

import com.skincare.model.Service;
import com.skincare.model.User;
import com.skincare.repository.ServiceRepository;
import com.skincare.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;

@Component
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final ServiceRepository serviceRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public DataInitializer(UserRepository userRepository, ServiceRepository serviceRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.serviceRepository = serviceRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {
        // Create default users if none exist
        if (userRepository.count() == 0) {
            createDefaultUsers();
        }

        // Create default services if none exist
        if (serviceRepository.count() == 0) {
            createDefaultServices();
        }
    }

    private void createDefaultUsers() {
        // Create admin user
        User admin = new User();
        admin.setUsername("admin");
        admin.setPassword(passwordEncoder.encode("admin123"));
        admin.setFullName("Admin User");
        admin.setEmail("admin@beautyspa.com");
        admin.setRole(User.Role.ROLE_ADMIN);
        userRepository.save(admin);

        // Create regular user
        User user = new User();
        user.setUsername("user");
        user.setPassword(passwordEncoder.encode("user123"));
        user.setFullName("Regular User");
        user.setEmail("user@beautyspa.com");
        user.setRole(User.Role.ROLE_USER);
        userRepository.save(user);
    }

    private void createDefaultServices() {
        // Service 1: Classic Facial
        Service classicFacial = new Service();
        classicFacial.setName("Classic Facial");
        classicFacial.setDescription("A traditional facial treatment to cleanse, exfoliate, and nourish your skin. Includes steam, extraction, and a relaxing face massage.");
        classicFacial.setPrice(new BigDecimal("79.99"));
        classicFacial.setDurationMinutes(60);
        classicFacial.setImageUrl("/images/classic-facial.jpg");
        serviceRepository.save(classicFacial);

        // Service 2: Deep Cleansing Treatment
        Service deepCleansing = new Service();
        deepCleansing.setName("Deep Cleansing Treatment");
        deepCleansing.setDescription("An intensive treatment that targets clogged pores and removes impurities. Perfect for oily or acne-prone skin.");
        deepCleansing.setPrice(new BigDecimal("89.99"));
        deepCleansing.setDurationMinutes(75);
        deepCleansing.setImageUrl("/images/deep-cleansing.jpg");
        serviceRepository.save(deepCleansing);

        // Service 3: Anti-Aging Treatment
        Service antiAging = new Service();
        antiAging.setName("Anti-Aging Treatment");
        antiAging.setDescription("Advanced treatment designed to reduce fine lines and wrinkles. Uses premium serums with peptides and antioxidants to rejuvenate skin.");
        antiAging.setPrice(new BigDecimal("129.99"));
        antiAging.setDurationMinutes(90);
        antiAging.setImageUrl("/images/anti-aging.jpg");
        serviceRepository.save(antiAging);

        // Service 4: Hydrating Facial
        Service hydrating = new Service();
        hydrating.setName("Hydrating Facial");
        hydrating.setDescription("Deeply hydrating treatment for dry or dehydrated skin. Includes hyaluronic acid mask and moisturizing serums to restore skin's natural balance.");
        hydrating.setPrice(new BigDecimal("99.99"));
        hydrating.setDurationMinutes(60);
        hydrating.setImageUrl("/images/hydrating-facial.jpg");
        serviceRepository.save(hydrating);
    }
} 