#!/bin/bash
. config-default.sh
docker rmi $imageName
docker build -t $imageName .
