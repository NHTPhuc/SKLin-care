package com.skincare.service;

import com.skincare.model.Appointment;
import com.skincare.model.User;
import com.skincare.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    public AppointmentService(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public Appointment createAppointment(Appointment appointment) {
        // Perform any validation or business logic here
        return appointmentRepository.save(appointment);
    }

    public List<Appointment> findUserAppointments(User user) {
        return appointmentRepository.findByUser(user);
    }

    public List<Appointment> findAppointmentsInTimeRange(LocalDateTime start, LocalDateTime end) {
        return appointmentRepository.findByAppointmentDateTimeBetween(start, end);
    }

    public Optional<Appointment> findById(Long id) {
        return appointmentRepository.findById(id);
    }

    public Appointment updateAppointmentStatus(Long id, Appointment.Status status) {
        Optional<Appointment> appointment = appointmentRepository.findById(id);
        if (appointment.isPresent()) {
            Appointment updatedAppointment = appointment.get();
            updatedAppointment.setStatus(status);
            return appointmentRepository.save(updatedAppointment);
        }
        throw new RuntimeException("Appointment not found with id: " + id);
    }
} 