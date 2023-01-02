FROM node:latest
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node que1.js
<<<<<<< HEAD
EXPOSE 8000
=======
EXPOSE 8000
>>>>>>> 8e4578384326c5ca8207798c477bfd1c0f4cc58b
