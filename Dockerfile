FROM node:lts AS compile-image

LABEL name="Webpack starter" \
      description="This image is for webpack typescript starter."

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . ./ 
RUN npm run build

FROM nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf 
COPY --from=compile-image /opt/ng/dist/app-name /usr/share/nginx/html
