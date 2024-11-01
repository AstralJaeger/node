FROM node:lts-alpine@sha256:f265794478aa0b1a23d85a492c8311ed795bc527c3fe7e43453b3c872dcd71a3
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
