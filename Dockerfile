FROM node:lts-alpine@sha256:9e38d3d4117da74a643f67041c83914480b335c3bd44d37ccf5b5ad86cd715d1
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
