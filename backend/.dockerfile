FROM node:20-alpine

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4550

CMD [ "npm", "run", "start" ]