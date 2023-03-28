FROM node:16-alpine
RUN apk update && apk add build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm set registry https://registry.npmmirror.com
RUN npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
RUN npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
RUN npm config set network-timeout 600000 -g && npm install
WORKDIR /opt/app
COPY ./ .
RUN npm run build
EXPOSE 1337
CMD ["node", "server.js"]
