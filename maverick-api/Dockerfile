FROM node:14-alpine

WORKDIR /usr/maverick-api

ENV PATH /usr/maverick-api/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

RUN npm run prebuild

RUN npm run build

CMD ["npm", "run", "start:prod"]
