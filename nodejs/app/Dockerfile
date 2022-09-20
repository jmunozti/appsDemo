FROM mhart/alpine-node:12

WORKDIR /app

COPY package*.json ./
RUN mkdir -p /app/results
RUN npm ci --only=production
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]
