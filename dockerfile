FROM node:20
WORKDIR /src
COPY package*.json ./
ARG NODE_ENV 
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi
COPY . .
EXPOSE 3000
CMD ["npm","run", "start-dev"] 