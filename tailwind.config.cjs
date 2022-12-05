/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#1C1724',
				secondary: '#FEFC24',
				white: '#E8E7EC',
				gray: '#ACABB0',
				'gray-dark': '#26212e'
			},
			fontFamily: {
				sans: ['Lexend', 'sans-serif']
			},
			maxWidth: {
				'screen-3xl': '1920px'
			},
			boxShadow: {
				'contact-background': `inset 0px 0px 0px 1000px #1C1724fa`
			}
		}
	},
	plugins: []
}
