/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
		"node_modules/preline/dist/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					"-apple-system",
					"BlinkMacSystemFont",
					'"SF Pro Text"',
					'"SF Pro Display"',
					"Roboto",
					"Arial",
					"sans-serif",
				],
			},
			colors: {
				dark: "#000",
			},
			fontFamily: {},
			screens: {
				xs: "340px",
			},
		},
	},
	darkMode: "class",
	plugins: [require("@tailwindcss/typography"), require("preline/plugin")],
}
