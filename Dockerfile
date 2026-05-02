FROM node:lts-alpine

HEALTHCHECK NONE

ENV NODE_ENV=production

RUN apk add --no-cache tini
WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/src/* ./

RUN npm ci --omit dev --ignore-scripts

USER node
CMD ["tini", "--", "npm", "start"]
