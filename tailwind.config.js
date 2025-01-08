/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray-light-50': '#f9fafb',
      'gray-light-100': '#f3f4f6',
      'gray-light-200': '#e5e7eb',
      'gray-light-300': '#d1d5db',
      'gray-light-400': '#9ca3af',
      'gray-light-500': '#6b7280',
      'gray-light-600': '#4b5563',
      'gray-light-700': '#374151',
      'gray-light-800': '#1f2937',
      'gray-light-900': '#111827',
      'gray-light-950': '#030712',
      'gray-dark-50': '#030712',
      'gray-dark-100': '#111827',
      'gray-dark-200': '#1f2937',
      'gray-dark-300': '#374151',
      'gray-dark-400': '#4b5563',
      'gray-dark-500': '#6b7280',
      'gray-dark-600': '#9ca3af',
      'gray-dark-700': '#d1d5db',
      'gray-dark-800': '#e5e7eb',
      'gray-dark-900': '#f3f4f6',
      'gray-dark-950': '#f9fafb',
      'emerald': '#10b981'
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

