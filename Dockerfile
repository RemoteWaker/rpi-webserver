FROM node:lts-alpine

WORKDIR /build

COPY package.json .
COPY tsconfig.json .
COPY ./src src

RUN npm install
RUN npm run build

FROM node:lts-alpine
WORKDIR /app
COPY --from=0 /build/dist/index.js .
COPY package.json .
RUN npm install --omit=dev
RUN mkdir -p /data/config

EXPOSE 8080

CMD ["node", "index.js"]