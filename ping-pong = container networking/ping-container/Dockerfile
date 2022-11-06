FROM node:16-alpine

WORKDIR /app  

COPY package.json package-lock.json log4js.json ./ 

RUN npm install 

EXPOSE 5000 

COPY index.js . 

ENTRYPOINT ["node","index.js"] 