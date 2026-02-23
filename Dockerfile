
FROM node:20

WORKDIR /app


COPY backend/package*.json ./

RUN npm install


COPY backend ./ 


COPY index.html ./ 


EXPOSE 3000

CMD ["node", "server.js"]