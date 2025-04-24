/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#f8f9fa',
                    100: '#e9ecef',
                    200: '#dee2e6',
                    300: '#ced4da',
                    400: '#adb5bd',
                    500: '#8D97A3', // main primary color
                    600: '#6c757d',
                    700: '#495057',
                    800: '#343a40',
                    900: '#212529',
                },
                accent: {
                    light: '#B5EAD7', // light mint
                    DEFAULT: '#98D7C2', // mint
                    dark: '#6AB7A8', // dark mint
                },
                secondary: {
                    light: '#FFD7BA', // light peach
                    DEFAULT: '#FFAAA5', // peach
                    dark: '#FF8B94', // dark peach
                }
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}