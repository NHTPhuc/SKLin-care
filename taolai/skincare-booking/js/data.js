// Simulated database using localStorage
const initializeData = () => {
    // Initialize default users if they don't exist
    if (!localStorage.getItem('users')) {
        const defaultUsers = [{
                username: 'admin',
                password: 'admin123',
                fullName: 'Admin User',
                email: 'admin@beautyspa.com',
                role: 'ROLE_ADMIN'
            },
            {
                username: 'user',
                password: 'user123',
                fullName: 'Regular User',
                email: 'user@beautyspa.com',
                role: 'ROLE_USER'
            }
        ];
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }

    // Initialize default services if they don't exist
    if (!localStorage.getItem('services')) {
        const defaultServices = [{
                id: 1,
                name: 'Classic Facial',
                description: 'A traditional facial treatment to cleanse, exfoliate, and nourish your skin. Includes steam, extraction, and a relaxing face massage.',
                price: 79.99,
                durationMinutes: 60,
                imageUrl: '/images/classic-facial.jpg'
            },
            {
                id: 2,
                name: 'Deep Cleansing Treatment',
                description: 'An intensive treatment that targets clogged pores and removes impurities. Perfect for oily or acne-prone skin.',
                price: 89.99,
                durationMinutes: 75,
                imageUrl: '/images/deep-cleansing.jpg'
            },
            {
                id: 3,
                name: 'Anti-Aging Treatment',
                description: 'Advanced treatment designed to reduce fine lines and wrinkles. Uses premium serums with peptides and antioxidants to rejuvenate skin.',
                price: 129.99,
                durationMinutes: 90,
                imageUrl: '/images/anti-aging.jpg'
            },
            {
                id: 4,
                name: 'Hydrating Facial',
                description: 'Deeply hydrating treatment for dry or dehydrated skin. Includes hyaluronic acid mask and moisturizing serums to restore skin\'s natural balance.',
                price: 99.99,
                durationMinutes: 60,
                imageUrl: '/images/hydrating-facial.jpg'
            }
        ];
        localStorage.setItem('services', JSON.stringify(defaultServices));
    }

    // Initialize default appointments if they don't exist
    if (!localStorage.getItem('appointments')) {
        localStorage.setItem('appointments', JSON.stringify([]));
    }
};

// Initialize data when the script loads
initializeData();