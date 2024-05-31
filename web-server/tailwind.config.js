/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    theme: {
        extend: {
            colors: {
                'top-nav-icon': '#54656f'
            }
        },
        fontFamily: {
            display: ['sans serif'],
            body: ['sans serif']
        }
        // extend: {
        //     spacing: {
        //         '8xl': '96rem',
        //         '9xl': '128rem'
        //     },
        //     borderRadius: {
        //         '4xl': '2rem'
        //     }
        // }
    }
}
