FROM node:14-alpine

WORKDIR /code

COPY package*.json ./

COPY . .

ADD start.sh /start.sh

RUN chmod 755 /start.sh

CMD ["/start.sh"]