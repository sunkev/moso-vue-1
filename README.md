# moso-vue
My personal portfolio (re)built with [Vue.js](https://vuejs.org) and [Nuxt.js](https://nuxtjs.org).

### Install
Run `npm install` or `yarn install` to install the dependencies.

### Scripts
Since this project is compiled Nuxt, you have the following scripts at hand:

- `npm run dev`: will run `nuxt` to launch a development server on `localhost:3000` with hot-reloading.
- `npm run build` will run `nuxt build` to build your application with webpack, and minify the JS & CSS (for production).
- `npm run start` will run `nuxt start` to start the server in production mode (after running `nuxt build`).
- `npm run generate` will run `nuxt generate` to build the application and generate every route as an HTML file (used for static hosting).
- `npm run lint`: ESLint will lint all of your JavaScript and Vue files while ignoring your ignored files defined in your `.gitignore`.
- `npm run precommit`: Same as `npm run lint`, however recommended best practice.
