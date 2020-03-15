FROM node:latest

# Change working directory
WORKDIR "/app"

# Update packages and install dependency packages for services
RUN apt-get update \
 && apt-get dist-upgrade -y \
 && apt-get clean \
 && echo 'Finished installing dependencies'

# Copy package.json and package-lock.json
COPY package*.json ./

# Install npm production packages 
RUN npm install --production

COPY . /app

ENV NODE_ENV production

RUN npm run install:client
RUN npm run build

ENV PORT 3000

EXPOSE 3000

USER node

CMD ["npm", "start"]
