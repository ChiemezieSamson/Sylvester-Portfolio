/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	corePlugins: {
		preflight: true,
	},
	theme: {
		extend: {
			fontFamily: {
				bangers: ["Bangers", "cursive"],
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
