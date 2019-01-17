FROM node:10.15 as poke
WORKDIR /app
COPY package*.json ./
RUN npm i
RUN npm install react-scripts@2.1.1 -g
COPY . ./
RUN npm run build

FROM nginx:alpine
COPY --from=poke /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]