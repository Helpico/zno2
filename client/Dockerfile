# base image for frontend containers
FROM node:18.4.0-bullseye

WORKDIR /client
COPY package.json .
# RUN bash -c "npm install webpack webpack-cli webpack-dev-server style-loader css-loader postcss-loader babel-loader @babel/preset-env @babel/core core-js html-webpack-plugin tailwindcss postcss autoprefixer -D -E"
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]