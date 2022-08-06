FROM node:lts-alpine@sha256:1908564153449b1c46b329e6ce2307e226bc566294f822f11c5a8bcef4eeaad7
MAINTAINER Felix Hillebrand <astraljaeger@pm.me>

ENV NODE_ENV production

RUN apk add dumb-init

WORKDIR /usr/src/app

COPY --chown=node:node package*.json ./
COPY --chown=node:node dist/src/* ./

RUN npm i -g npm
RUN npm ci --only=production --ignore-scripts

USER node
CMD ["dumb-init", "node", "index.js"]
