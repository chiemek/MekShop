# use node.js LTS version as a base image
FROM node:24-alpine AS builder

# set working directory
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code to the working directory
COPY . .

# build the application
RUN npm run build


# use nginx as a base image for serving the application
FROM nginx:alpine

#copy the built app to Nginx default directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80 

# start nginx
CMD ["nginx", "-g", "daemon off"]
