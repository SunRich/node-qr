FROM node:6.10.3-alpine
# Create app directory and bundle app source
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# Expose port
EXPOSE 8080

CMD [ "node", "app.js" ]
