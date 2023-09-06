# Development Stage
FROM node:17 AS development

WORKDIR /home/client_node/app

# Copy package.json and package-lock.json for Node.js dependencies
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Create a cache directory and set permissions for node_modules
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Copy the rest of the application code
COPY . ./

# Expose port 3000 for development
EXPOSE 3000

# Set the user to 'node' for running the application
USER node

# Start the development server
CMD [ "npm", "start" ]

# Build Stage
FROM node:17 as builder

# Set the environment to production for building
ENV NODE_ENV production

WORKDIR /home/client_node/app

# Copy package.json and package-lock.json for Node.js dependencies
COPY package*.json ./

# Install Node.js dependencies for production
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the production application
RUN npm run build

# Production Stage
FROM nginx:alpine AS production

# Set the environment to production
ENV NODE_ENV production

# Copy the built application from the 'builder' stage to Nginx's web root
COPY --from=builder /home/client_node/app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for serving the production application
EXPOSE 80

# Start Nginx in daemon mode
CMD ["nginx", "-g", "daemon off;"]
