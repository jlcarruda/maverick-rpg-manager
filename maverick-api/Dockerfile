FROM node:14-alpine as build

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm ci --only=development --silent

COPY . .

# EXPOSE 3000

RUN npm run build

# ============ Development Deploy =============

FROM node:14-alpine as development

ENV NODE_ENV=development

WORKDIR /usr/src/api

COPY --chown=node:node package*.json ./

RUN npm ci --only=production --silent

COPY --from=build --chown=node:node /usr/src/api/dist ./dist

USER node

# ============ Production Deploy =============

FROM node:14-alpine as production

ENV NODE_ENV=production

WORKDIR /usr/src/api

COPY --chown=node:node package*.json ./

RUN npm ci --only=production --silent

COPY --from=build --chown=node:node /usr/src/api/dist ./dist

USER node

