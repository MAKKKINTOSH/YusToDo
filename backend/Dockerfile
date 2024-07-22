FROM node:20 as base

WORKDIR /app
RUN apt-get update
COPY package*.json ./
RUN npm install
COPY . ./

FROM base as production

ENV NODE_PATH=./build
RUN npm run build

EXPOSE 8000