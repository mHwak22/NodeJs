FROM node: 18
WORKDIR /app
COPY package.jons /app
RUN npm install
COPY . /app
CMD node que1.jons
EXPOSE 8000