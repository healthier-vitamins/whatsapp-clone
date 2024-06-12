/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    theme: {
        extend: {
            colors: {
                'top-nav-icon': '#54656f',
                'primary-font-color': '#3b4a54',
                'primary-placeholder-font-color': 'rgb(107, 114, 128)',

                'textfield-height': '35px'
            }
        },
        fontFamily: {
            display: ['sans serif'],
            body: ['sans serif']
        }
    }
}
