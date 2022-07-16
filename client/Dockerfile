# base image for frontend containers
FROM node:18.4.0-bullseye

WORKDIR /client
COPY . .
RUN npm install webpack webpack-cli webpack-dev-server --save-dev --save-exact
RUN npm postcss-loader css-loader html-webpack-plugin tailwindcss postcss autoprefixer --save-dev --save-exact
CMD ["npm", "run", "dev"]