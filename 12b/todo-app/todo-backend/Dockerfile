FROM node:20

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# Expose the port your app runs on (optional, depending on your app)
EXPOSE 3000

# Set environment variable
ENV DEBUG=*

CMD ["npm", "start"]


