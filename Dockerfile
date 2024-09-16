# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the app source code
COPY . .

# Copy wait-for-it script
COPY wait-for-it.sh .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["./wait-for-it.sh", "db:5432", "--", "node", "app.js"]
