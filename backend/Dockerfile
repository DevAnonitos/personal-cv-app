FROM node:20-alpine

RUN add group app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app

USER app

RUN npm install

COPY . .

EXPOSE 4000

CMD npm start