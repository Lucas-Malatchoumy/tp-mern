# Builder Stage
FROM node:17 AS builder

# Set the working directory for the builder stage
WORKDIR /home/server_node/app

# Copy package.json and package-lock.json for Node.js dependencies
COPY package*.json ./

# Install Node.js dependencies for development
RUN npm install

# Copy the rest of the application code
COPY . ./

# Production Stage
FROM node:17

# Set the working directory for the production stage
WORKDIR /home/server_node/app

# Copy package.json and package-lock.json for Node.js dependencies
COPY package*.json ./

# Install Node.js dependencies for production (using 'npm ci' for consistency)
RUN npm ci --only=production

# Copy the built application from the 'builder' stage to the production stage
COPY --from=builder /home/server_node/app .

# Expose port 3001 for the production application
EXPOSE 3001

# Set the user to 'node' for running the application
USER node

# Start the production server
CMD [ "npm", "start" ]
