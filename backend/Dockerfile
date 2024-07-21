FROM node:20

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends &&\
    apt-get install curl

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 8000