FROM node:lts-alpine@sha256:ef3f47741e161900ddd07addcaca7e76534a9205e4cd73b2ed091ba339004a75
LABEL maintainer="Felix Hillebrand <astraljaeger@pm.me>"

HEALTHCHECK NONE

ENV NODE_ENV production

RUN apk add --no-cache tini
WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/src/* ./

RUN npm ci --only=production --ignore-scripts

USER node
CMD ["tini", "--", "npm", "start"]
