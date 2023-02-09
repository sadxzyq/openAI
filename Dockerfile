FROM node:lts-buster

RUN rm -rf /var/lib/apt/lists/*

EXPOSE 5000

CMD ["node", "index.js"]
