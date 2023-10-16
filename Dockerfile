FROM node:lts-alpine@sha256:1908564153449b1c46b329e6ce2307e226bc566294f822f11c5a8bcef4eeaad7
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
