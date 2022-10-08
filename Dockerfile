FROM node:14-alpine

WORKDIR /app

ADD package.json /app

RUN yarn

ADD ./ /app

RUN yarn run build 

COPY wrapper_script.sh wrapper_script.sh

CMD sh wrapper_script.sh
