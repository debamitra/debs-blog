# Step 1: Choose the base image
FROM node:18-buster

# Step 2: Set working directory
WORKDIR /app

# Step 3: Install libvips dependencies
# Update the package list and install dependencies for libvips
RUN apt-get update && apt-get install -y \
    build-essential \
    pkg-config \
    glib2.0-dev \
    libexpat1-dev \
    librsvg2-dev \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libtiff5-dev \
    libexif-dev \
    libxml2-dev \
    libheif-dev \
    libvips

# Clean up APT when done.
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Step 4: Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Step 5: Copy package files
COPY package*.json ./

# Step 6: Install npm dependencies
RUN npm install --force

# Step 7: Expose the port
EXPOSE 8000

# Step 8: CMD
# For development, we use `gatsby develop`. The command is set up to be run manually.
CMD ["tail", "-f", "/dev/null"]
