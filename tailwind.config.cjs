/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#1C1724',
				secondary: '#FED054',
				white: '#E8E7EC',
				gray: '#ACABB0'
			},
			fontFamily: {
				sans: ['Lexend', 'sans-serif']
			},
			maxWidth: {
				'screen-3xl': '1920px'
			}
		}
	},
	plugins: []
}
