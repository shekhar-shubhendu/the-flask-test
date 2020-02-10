FROM node:12.8.0-alpine as flask-test-frontend-build
WORKDIR /app
RUN apk add make gcc g++ python git
COPY  . .
RUN mv example.env .env && \
    npm install && \
    npm run build

FROM nginx:1.13.7-alpine

COPY ./docker/nginx.conf /etc/nginx/nginx.conf	
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=flask-test-frontend-build /app/build /usr/share/nginx/html