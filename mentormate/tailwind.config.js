module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // For JavaScript and TypeScript files in src
    './public/index.html',         // For HTML files in the public directory
    './src/components/**/*.{js,jsx,ts,tsx}', // If you have a components directory
    // Add more paths as necessary
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
