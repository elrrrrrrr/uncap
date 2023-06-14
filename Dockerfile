# https://stackoverflow.com/questions/65612411/forcing-docker-to-use-linux-amd64-platform-by-default-on-macos/69636473#69636473
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .

RUN npm i --registry=https://registry.npmmirror.com

ENV NPM_REGISTRY=https://registry.npmmirror.com

EXPOSE 8000
CMD ["npm", "start"]
