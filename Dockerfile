# Use official Node.js runtime as base image
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy TypeScript configuration
COPY tsconfig.json ./

# Copy source code
COPY src/ ./src/
COPY config.json ./

# Build TypeScript code
RUN npm run build

# Expose port (optional - useful if you plan to add a web server later)
EXPOSE 3000

# Set default command to run the main application
CMD ["node", "dist/src/index.js"]
