FROM node:16.5

WORKDIR /home/node/appmain

COPY package*.json ./


RUN npm i
RUN npm run build

COPY . .


CMD [ "npm", "run", "start" ]