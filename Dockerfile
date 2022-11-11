FROM node:18.12.1 AS build


LABEL name="Webpack typescript starter" \
      description="This image is for webpack typescript starter."

WORKDIR /app
COPY package*.json ./

RUN npm ci

COPY . ./ 
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/dist /usr/share/nginx/html
