package com.skincare.service;

import com.skincare.model.Service;
import com.skincare.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
public class ServiceService {

    private final ServiceRepository serviceRepository;

    @Autowired
    public ServiceService(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    public List<Service> findAllServices() {
        return serviceRepository.findAll();
    }

    /**
     * Get all active services
     */
    public List<Service> getAllActiveServices() {
        return serviceRepository.findByActiveTrue();
    }

    /**
     * Get service by ID
     */
    public Optional<Service> getServiceById(Long id) {
        return serviceRepository.findById(id);
    }

    public Optional<Service> findById(Long id) {
        return serviceRepository.findById(id);
    }

    public Service createService(Service service) {
        return serviceRepository.save(service);
    }

    public Service updateService(Long id, Service serviceDetails) {
        Optional<Service> service = serviceRepository.findById(id);
        if (service.isPresent()) {
            Service existingService = service.get();
            existingService.setName(serviceDetails.getName());
            existingService.setDescription(serviceDetails.getDescription());
            existingService.setPrice(serviceDetails.getPrice());
            existingService.setDurationMinutes(serviceDetails.getDurationMinutes());
            existingService.setImageUrl(serviceDetails.getImageUrl());
            existingService.setActive(serviceDetails.isActive());
            return serviceRepository.save(existingService);
        }
        throw new RuntimeException("Service not found with id: " + id);
    }

    public void deleteService(Long id) {
        serviceRepository.deleteById(id);
    }
} 