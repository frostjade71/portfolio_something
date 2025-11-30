# Development stage
FROM node:18-alpine AS development

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Set environment variable for port
ENV PORT 3000

# Start the development server with hot reload
CMD ["npm", "run", "dev"]
