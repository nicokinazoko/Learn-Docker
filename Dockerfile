FROM node:23-alpine3.20
COPY  docker-node/ /app
WORKDIR /app
RUN npm install
CMD ["node", "server.js"]