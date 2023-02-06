FROM node:16

WORKDIR /frontend
COPY ./package*.json /frontend/
RUN npm install && chmod 777 /frontend/node_modules/
ENTRYPOINT ["npm", "start"]