FROM node:12

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

RUN npm test

CMD [ "npm", "start" ]
