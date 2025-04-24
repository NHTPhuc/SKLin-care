-- Insert admin user (password: admin123)
INSERT INTO users (username, password, full_name, email, phone_number, role) 
VALUES ('admin', '$2a$10$yfNDDHRaW5toUbZaP5RLrOCXPGTkF9jRKg/Cdy0MHvnmm5K0mCdDi', 'Admin User', 'admin@skincare.com', '123-456-7890', 'ROLE_ADMIN');

-- Insert regular user (password: user123)
INSERT INTO users (username, password, full_name, email, phone_number, role) 
VALUES ('user', '$2a$10$5cMFvUxKVYwqOKGvkAFT4eyHOzYPuYfBVJQL0QxfQJ1xHLIw08EWu', 'Regular User', 'user@skincare.com', '987-654-3210', 'ROLE_USER');

-- Insert skincare services
INSERT INTO services (name, description, price, duration_minutes, image_url, active) 
VALUES ('Facial Treatment', 'A comprehensive facial treatment that includes cleansing, exfoliation, extraction, and hydration to rejuvenate your skin.', 80.00, 60, '/images/facial-treatment.jpg', true);

INSERT INTO services (name, description, price, duration_minutes, image_url, active) 
VALUES ('Deep Cleansing', 'A deep cleansing treatment that removes impurities and unclogs pores for a refreshed complexion.', 65.00, 45, '/images/deep-cleansing.jpg', true);

INSERT INTO services (name, description, price, duration_minutes, image_url, active) 
VALUES ('Anti-Aging Treatment', 'An advanced treatment designed to reduce fine lines and wrinkles, and improve skin elasticity.', 120.00, 75, '/images/anti-aging.jpg', true);

INSERT INTO services (name, description, price, duration_minutes, image_url, active) 
VALUES ('Acne Treatment', 'A specialized treatment targeting acne-prone skin, reducing inflammation and preventing future breakouts.', 90.00, 60, '/images/acne-treatment.jpg', true);

INSERT INTO services (name, description, price, duration_minutes, image_url, active) 
VALUES ('Hydrating Facial', 'A moisturizing facial that replenishes dry, dehydrated skin for a glowing complexion.', 75.00, 50, '/images/hydrating-facial.jpg', true);

-- Insert sample appointments (using H2 syntax for date manipulation)
INSERT INTO appointments (user_id, service_id, appointment_date_time, status, notes) 
VALUES (2, 1, DATEADD('DAY', 7, CURRENT_DATE()), 'CONFIRMED', 'First time client');

INSERT INTO appointments (user_id, service_id, appointment_date_time, status, notes) 
VALUES (2, 3, DATEADD('DAY', 14, CURRENT_DATE()), 'PENDING', 'Client requested evening appointment');

-- Insert services
INSERT INTO services (id, name, description, price, duration_minutes, image_url, active) 
VALUES 
(1, 'Chăm Sóc Da Mặt Cơ Bản', 'Làm sạch sâu, tẩy tế bào chết, massage và đắp mặt nạ dưỡng chất.', 450000, 60, 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6', true),
(2, 'Điều Trị Mụn Chuyên Sâu', 'Phương pháp điều trị mụn hiện đại kết hợp công nghệ và sản phẩm đặc trị.', 550000, 75, 'https://images.unsplash.com/photo-1615397349754-cfa2ff1d4891', true),
(3, 'Liệu Trình Chống Lão Hóa', 'Kết hợp công nghệ RF, ánh sáng sinh học và serum chống lão hóa cao cấp.', 850000, 90, 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881', true),
(4, 'Trẻ Hóa & Làm Sáng Da', 'Cải thiện tông màu da, làm mờ đốm nâu và tăng cường độ đàn hồi cho da.', 750000, 75, 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8', true),
(5, 'Chăm Sóc Body Toàn Diện', 'Tẩy tế bào chết toàn thân, massage thư giãn và ủ dưỡng chất.', 650000, 90, 'https://images.unsplash.com/photo-1519824145371-296894a0daa9', true),
(6, 'Massage Mặt Thư Giãn', 'Kỹ thuật massage thư giãn kết hợp tinh dầu thiên nhiên và đá nóng.', 350000, 45, 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9', true);

-- Insert users
INSERT INTO users (id, username, password, email, full_name, role, created_at) 
VALUES 
(1, 'admin', '$2a$10$SYW2MYXuSlscOwcQWD6YS.SaBVJYrb8g5XBdCXKCv/TM64pjiLQ1y', 'admin@beautyspa.com', 'Admin BeautySpa', 'ROLE_ADMIN', CURRENT_TIMESTAMP),
(2, 'user', '$2a$10$9FaoCwgGPgNhZVnPlxdFoeHITqyQbXQY4GAuRVJKMx0YoR4QGWRQO', 'user@example.com', 'Nguyễn Văn A', 'ROLE_USER', CURRENT_TIMESTAMP);

-- Insert some sample bookings
INSERT INTO bookings (id, username, service_id, date, time, notes, status, payment_status, created_at, full_name) 
VALUES 
(1, 'user', 1, '2023-08-10', '10:00:00', 'Skin is sensitive', 'Hoàn thành', 'Đã thanh toán', '2023-08-01 15:30:00', 'Nguyễn Văn A'),
(2, 'user', 3, '2023-08-15', '14:00:00', 'First time', 'Đang chờ', 'Chưa thanh toán', '2023-08-02 10:15:00', 'Nguyễn Văn A'); 