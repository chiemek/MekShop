# Use official Node.js LTS image as base
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files first for caching npm install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all app source code
COPY . .

# Expose port your app runs on (adjust if needed)
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
