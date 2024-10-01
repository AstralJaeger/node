FROM node:lts-alpine@sha256:2d07db07a2df6830718ae2a47db6fedce6745f5bcd174c398f2acdda90a11c03
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
