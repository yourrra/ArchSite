FROM node:16.5

WORKDIR /home/node/archsite

COPY package*.json ./


RUN npm ci

COPY . .
RUN npm run build


CMD [ "npm", "run", "start" ]