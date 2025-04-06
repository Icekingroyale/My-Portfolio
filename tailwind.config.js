/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'primary-light': 'var(--primary-light)',
                secondary: 'var(--secondary)',
                'secondary-light': 'var(--secondary-light)',
            },
        },
    },


    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.border': {
                    border: '2px solid red',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}
