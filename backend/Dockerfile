# Use an official Python runtime as the base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the backend requirements and install them
COPY backend/requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend application files
COPY backend/ /app/

# Expose the Flask API port (5000 by default)
EXPOSE 5000

# Define the command to run the Flask app
CMD ["python", "app.py"]
