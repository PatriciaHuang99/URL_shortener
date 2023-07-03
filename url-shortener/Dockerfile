# Dockerfile for building a Node.js 20-based image for the application

# Use the Node.js 20 image based on Alpine Linux 3.17.
FROM node:20-alpine3.17

# Copy package.json and package-lock.json to the /usr/app/ directory in the image.
COPY package*.json /usr/app/

# Copy the src directory to the /usr/app/ directory in the image.
COPY src /usr/app/src

# Describe that the container is listening on port 3000.
EXPOSE 3000

# Copy the remaining files in the current directory to the /usr/app/ directory in the image.
COPY . /usr/app

# Set the working directory to /usr/app.
WORKDIR /usr/app

# Install project dependencies using npm.
RUN npm install

# Specify the command to run when the container starts.
CMD ["npm", "run", "start"]
