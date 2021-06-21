FROM node:14

RUN apt update && apt install -y mysql-server postgresql postgresql-contrib expect
RUN service postgresql restart
WORKDIR /src/app
RUN npm install -g nodemon 
ADD . /src/app
RUN yarn install
EXPOSE $PORT

# ENTRYPOINT ["yarn", "prod"]