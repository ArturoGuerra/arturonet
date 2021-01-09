FROM node:buster as deps

WORKDIR /deps
COPY package.json .
COPY yarn.lock .
RUN yarn install

FROM node:buster as builder
WORKDIR /build
COPY --from=deps /deps/node_modules node_modules
COPY . .
RUN yarn build

FROM node:buster

WORKDIR /app
COPY --from=builder /build/node_modules node_modules
COPY --from=builder /build/.nuxt .nuxt
COPY . .

CMD ["yarn", "start"]