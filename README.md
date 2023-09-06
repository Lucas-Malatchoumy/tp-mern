# TP-MERN DOCKER

## Clone the project

```https://github.com/Lucas-Malatchoumy/tp-mern.git```

## Setup the project

```cd tp-mern````

### Environment variables

Edit environment variable like in .env.sample with your credentials : 

```touch .env```

## In dev environment

You need to create images from Dockerfile files (in client and server)
You can build images and start the project at the same time : 

```docker-compose -f docker-compose.dev.yml up --build```

## In prod environment

Same actions but the images will build with diferent stages from Dockerfiles, and the containers are created
with another docker-compose :

```docker compose -f docker-compose.prod.yml up --build```

## Use the project

First, you need to go on the client url. You will be able to read all messsages and write a messages on differents pages
The message will be stored in a mongo database.

### ELK

ElasticSearch, Logstash, Kibana and FileBeat are configured to analyse logs from docker containers and from logs which are generated
from express backend with winston.
Go to kibana url to search logs and enjoy !