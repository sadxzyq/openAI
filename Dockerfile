FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  pkg install yarn \
  yarn \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

COPY package.json .

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
