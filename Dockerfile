
FROM node:22-alpine as build

WORKDIR /app


COPY package*.json ./
RUN npm install
RUN npm install bootstrap-icons


COPY . .


RUN npm run build


FROM nginx:alpine as production


RUN rm -rf /usr/share/nginx/html/*


RUN mkdir -p /usr/share/nginx/html/weather-app

COPY --from=build /app/dist /usr/share/nginx/html/weather-app


COPY --from=build /app/dist/index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]