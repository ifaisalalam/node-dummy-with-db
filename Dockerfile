FROM node:12-alpine

RUN apk add make gcc python g\+\+

WORKDIR /home/node/app

COPY package*.json ./

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

RUN chown node:node /home/node -R

RUN npm install --only=production

COPY --chown=node:node . .

USER node

CMD ["node", "."]

