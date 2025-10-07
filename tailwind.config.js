	/** @type {import('tailwindcss').Config} */
	export default {
		darkMode: ['class'],
		content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'qb-navy': '#151928',
				'qb-gold': '#D4AF37',
				navy: {
					DEFAULT: '#0B2545',
					light: '#1E3A8A'
				},
				teal: {
					'50': '#E6FAF7',
					'100': '#B3F0E7',
					'200': '#80E6D7',
					'300': '#4DDCC7',
					'400': '#1ACFB5',
					'500': '#00BFA6',
					'600': '#009985',
					'700': '#007364',
					'800': '#004D43',
					'900': '#002622',
					DEFAULT: '#00BFA6',
					light: '#1ECFB5'
				},
				coral: {
					'50': '#FFE8E9',
					'100': '#FFBFC1',
					'200': '#FF9699',
					'300': '#FF6D71',
					'400': '#FF4449',
					'500': '#FF5A5F',
					'600': '#CC484D',
					'700': '#99363A',
					'800': '#662427',
					'900': '#331214',
					DEFAULT: '#FF5A5F',
					light: '#FF7AA2'
				},
				neutral: '#F7FAFC',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				poppins: [
					'Poppins',
					'sans-serif'
				],
				inter: [
					'Inter',
					'sans-serif'
				]
			},
			boxShadow: {
				'qb-gold/50': '0 10px 40px -10px rgba(212, 175, 55, 0.5)',
				coral: '0 10px 40px -10px rgba(255, 90, 95, 0.5)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
	};