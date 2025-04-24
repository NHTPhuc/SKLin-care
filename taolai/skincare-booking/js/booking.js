// Booking service functionality with database connection

// Base URL for API calls
const API_BASE_URL = 'http://localhost:8080/skincare-booking';

// Load services from the database
async function loadServices() {
    try {
        const response = await fetch(`${API_BASE_URL}/api/services`);
        if (!response.ok) {
            throw new Error('Failed to load services');
        }
        const services = await response.json();

        // Populate the service dropdown
        const serviceSelect = document.getElementById('service');
        if (serviceSelect) {
            serviceSelect.innerHTML = '<option value="">Chọn một dịch vụ</option>';

            services.forEach(service => {
                const option = document.createElement('option');
                option.value = service.id;
                option.textContent = `${service.name} - ${formatCurrency(service.price)} (${service.durationMinutes} phút)`;
                serviceSelect.appendChild(option);
            });
        }

        return services;
    } catch (error) {
        console.error('Error loading services:', error);

        // Fallback to localStorage if API fails
        const services = JSON.parse(localStorage.getItem('services') || '[]');
        if (services.length > 0) {
            const serviceSelect = document.getElementById('service');
            if (serviceSelect) {
                serviceSelect.innerHTML = '<option value="">Chọn một dịch vụ</option>';

                services.forEach(service => {
                    const option = document.createElement('option');
                    option.value = service.id;
                    option.textContent = `${service.name} - ${formatCurrency(service.price)} (${service.durationMinutes} phút)`;
                    serviceSelect.appendChild(option);
                });
            }
        }
        return services;
    }
}

// Create a new booking in the database
async function createBooking(bookingData) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });

        if (!response.ok) {
            throw new Error('Failed to create booking');
        }

        return await response.json();
    } catch (error) {
        console.error('Error creating booking:', error);

        // Fallback to localStorage if API fails
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        const newBooking = {
            ...bookingData,
            id: Date.now(), // Generate a unique ID
            createdAt: new Date().toISOString(),
            status: 'Đang chờ',
            paymentStatus: 'Chưa thanh toán'
        };

        appointments.push(newBooking);
        localStorage.setItem('appointments', JSON.stringify(appointments));

        return newBooking;
    }
}

// Format currency to Vietnamese format
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Initialize booking form
function setupBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    if (!bookingForm) return;

    // Load services
    loadServices();

    // Handle form submission
    bookingForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="animate-pulse">Đang xử lý...</span>';
        submitBtn.disabled = true;

        try {
            // Get form values
            const serviceId = parseInt(document.getElementById('service').value);
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const notes = document.getElementById('notes').value;

            // Validate form data
            if (!serviceId || !date || !time) {
                throw new Error('Vui lòng điền đầy đủ thông tin dịch vụ, ngày và giờ');
            }

            // Get user information
            const user = getCurrentUser();

            // Create booking data
            const bookingData = {
                userId: user ? user.id : null,
                username: user ? user.username : 'guest',
                fullName: user ? user.fullName : 'Khách',
                serviceId,
                date,
                time,
                notes,
                status: 'Đang chờ',
                paymentStatus: 'Chưa thanh toán'
            };

            // Send booking to database
            const result = await createBooking(bookingData);

            // Show success message
            bookingForm.classList.add('hidden');

            // Get service details
            const services = await loadServices();
            const service = services.find(s => s.id === serviceId) || {
                name: 'Dịch vụ không xác định',
                price: 0,
                durationMinutes: 0
            };

            // Show booking confirmation
            const bookingDetails = document.getElementById('booking-details');
            if (bookingDetails) {
                const dateObj = new Date(date);
                const formattedDate = dateObj.toLocaleDateString('vi-VN');

                bookingDetails.innerHTML = `
                    <div class="text-left bg-gray-50 p-4 rounded-lg">
                        <div class="flex justify-between items-center border-b pb-2 mb-2">
                            <span class="font-medium">Dịch vụ:</span>
                            <span>${service.name}</span>
                        </div>
                        <div class="flex justify-between items-center border-b pb-2 mb-2">
                            <span class="font-medium">Ngày:</span>
                            <span>${formattedDate}</span>
                        </div>
                        <div class="flex justify-between items-center border-b pb-2 mb-2">
                            <span class="font-medium">Giờ:</span>
                            <span>${time}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-medium">Trạng thái thanh toán:</span>
                            <span class="text-yellow-600">${bookingData.paymentStatus}</span>
                        </div>
                    </div>
                `;
            }

            document.getElementById('booking-success').classList.remove('hidden');

            // Show success notification
            addNotification('Đặt lịch thành công! Chúng tôi sẽ liên hệ xác nhận sớm.', 'success');

        } catch (error) {
            console.error('Lỗi khi đặt lịch:', error);
            addNotification(error.message, 'error');

            // Restore submit button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Add notification function
function addNotification(message, type = 'success') {
    const notificationContainer = document.createElement('div');
    notificationContainer.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;
    notificationContainer.innerHTML = message;
    document.body.appendChild(notificationContainer);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notificationContainer.classList.add('opacity-0');
        notificationContainer.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
            document.body.removeChild(notificationContainer);
        }, 500);
    }, 5000);
}

// Initialize booking form when document is ready
document.addEventListener('DOMContentLoaded', function() {
    setupBookingForm();
});