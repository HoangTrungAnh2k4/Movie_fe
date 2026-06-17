/**
 * Tailwind CSS configuration - sample setup for Movie_fe project
 * Generated as a minimal example (JIT, custom colors, spacing and forms plugin)
 */

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.html', './src/**/*.tsx', './public/index.html'],
    darkMode: 'media', // or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1f2937', // slate-800
                    light: '#3f4b5a',
                    accent: '#ef4444', // red-500
                },
            },
            spacing: {
                72: '18rem',
                84: '21rem',
                96: '24rem',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            backgroundColor: ['active'],
        },
    },
};
