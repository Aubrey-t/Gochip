FROM node:12-alpine as base
WORKDIR /app
COPY package.json .
RUN npm install --registry=https://registry.npm.taobao.org

FROM node:12-alpine as build
WORKDIR /app
COPY --from=base /app/node_modules node_modules
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

