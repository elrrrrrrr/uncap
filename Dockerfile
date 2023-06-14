FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY . .

RUN npm i --registry=https://registry.npmmirror.com

ENV NPM_REGISTRY=https://registry.npmmirror.com

EXPOSE 8000
CMD ["npm", "start"]
