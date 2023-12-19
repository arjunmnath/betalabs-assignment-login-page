import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    theme: {
      screens: {
        'sm': {'max': '767px'},
        // => @media (min-width: 640px) { ... }
  
        'md': {'min': '767px', 'max': '991px'},
        // => @media (min-width: 768px) { ... }
  
        'lg': {'min': '1200px', 'max': '1439px'},
        // => @media (min-width: 1024px) { ... }
  
        'xl': {'min': '1440px'},
        // => @media (min-width: 1280px) { ... }
  
        // '2xl': '1536px',
        // // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: [],
}
export default config


/* For mobile phones 
@media only screen and (max-width: 767px) {
  CSS styles specific to mobile phones 
}

 For tablets 
@media only screen and (min-width: 768px) and (max-width: 991px) {
   CSS styles specific to tablets 
}

For small laptops and large tablets 
@media only screen and (min-width: 1200px) and (max-width: 1439px) {
   CSS styles specific to small laptops and large tablets 
}

For medium to large laptops and desktops 
@media only screen and (min-width: 1440px) {
   CSS styles specific to medium to large laptops and desktops 
}*/