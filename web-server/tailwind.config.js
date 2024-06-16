/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    theme: {
        extend: {
            colors: {
                'top-nav-icon': '#54656f',
                'primary-font-color': '#3b4a54',
                'secondary-font-color': '#667781',
                'primary-placeholder-font-color': 'rgb(107, 114, 128)',

                'textfield-height': '35px',

                'primary-background': '#00a884',
                'secondary-background': 'rgb(241 245 249)',

                'primary-border-color': '#e9edef',

                'default-hover-color': 'rgb(245, 246, 246)'
            }
        },
        fontFamily: {
            display: ['sans serif'],
            body: ['sans serif']
        }
    }
}
