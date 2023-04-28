# Development Resources App
A web app built with Vue.js and styled with Tailwind that lets users store and add learning, development or technology resources.

## Project setup

### VueJS app:
1. Install packages &  dependencies: `npm install`
2. Compiles and hot-reloads for development `npm run serve`
3. Compiles and minifies for production: `npm run build`
4. Lints and fixes files `npm run lint`

### Tailwind setup:
1. Install tailwind:
  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
2. Add content to tailwind config's module.exports
  ```
  module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  ```
3. Add tailwind directives to CSS in newly-created stylesheet:
```
// in style.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
4. Import this stylesheet into the app:
```
// in main.js
import './style.css'
``` 