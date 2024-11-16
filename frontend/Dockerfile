# Use an official Node runtime as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json for dependency installation
COPY frontend/package.json frontend/package-lock.json /app/

# Install the dependencies
RUN npm install

# Copy the rest of the frontend files
COPY frontend/ /app/

# Build the React app for production
RUN npm run build

# Expose the port the React app runs on (3000 by default)
EXPOSE 3000

# Serve the React app (use a simple web server like `serve`)
CMD ["npx", "serve", "build", "-s", "-l", "3000"]
