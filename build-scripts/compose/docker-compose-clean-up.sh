#!/bin/bash

docker-compose down --volumes
docker image prune -a -f
docker-compose up -d