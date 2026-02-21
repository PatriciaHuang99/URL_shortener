# 1. Base image
FROM node:20-alpine3.17

# 2. Set the working directory first
WORKDIR /usr/app

# 3. Copy ONLY the dependency files
# Docker will "cache" this layer. It only re-runs if these files change.
COPY package*.json ./

# 4. Install dependencies (This is the slowest part, so we cache it!)
RUN npm install

# 5. NOW copy the rest of your source code
# Since this happens AFTER npm install, changing code won't trigger a re-install.
COPY . .

# 6. Documentation and Start command
EXPOSE 3000
CMD ["npm", "run", "start"]