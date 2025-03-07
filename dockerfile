FROM node:22.14-alpine

WORKDIR /express

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8088

CMD [ "npm","start" ]

