
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'blink': 'blinkAnimation 1s step-start infinite', // 1 second blink duration
//       },
//       keyframes: {
//         blinkAnimation: {
//           '0%, 100%': { opacity: '1' },
//           '50%': { opacity: '0' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blink': 'blinkAnimation 1s step-start infinite',
      },
      keyframes: {
        blinkAnimation: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
};
