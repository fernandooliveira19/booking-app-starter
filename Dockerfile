FROM  node:14 as node
WORKDIR /app
COPY package.json /app
RUN npm install --silent

##RUN npm run build --prod

FROM  nginx:1.21
RUN mkdir -p /app/dist/booking-app-starter
COPY --from=node app/dist/booking-app-starter /usr/share/nginx/html
VOLUME /var/cache/nginx
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
##EXPOSE 80