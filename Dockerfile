FROM node:12

WORKDIR /build
COPY . .
RUN npm install
RUN node_modules/.bin/ng build api --prod
RUN node_modules/.bin/ng build todo --prod

EXPOSE 3000

CMD [ "node", "dist/apps/api/main.js" ]

# docker build -t nestapp .
# docker run  -it --rm -p 3000:3000 nestapp
# docker ps
# docker stop <container ID>