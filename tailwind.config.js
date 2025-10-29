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

//     safelist: [
//     'text-red-600',
//     'bg-gray-200',
//     // add any other dynamic color classes you're using
//   ],

    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.dborder': {
                    border: '2px solid red',
                },
            }
            addUtilities(newUtilities, ['responsive', 'hover'])
        },
    ],
}
