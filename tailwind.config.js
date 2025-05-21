/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ], theme: {
        extend: {
            fontFamily: {
                'handlee': ['Handlee', 'cursive'],
                'quicksand': ['Quicksand', 'sans-serif'],
            },
        },
        fontFamily: {
            'sans': ['Quicksand', 'sans-serif'], // Set Quicksand as default font
        },
    },
    plugins: [],
};