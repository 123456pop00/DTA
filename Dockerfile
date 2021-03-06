# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# COPY --from=builder /app/static /app
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# COPY docker-entrypoint.sh /
# RUN chmod +x /docker-entrypoint.sh
# CMD ["/docker-entrypoint.sh"]
