FROM node:lts-buster

RUN rm -rf /var/lib/apt/lists/*

COPY package.json .

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
