#!/bin/bash
echo "run docker mongo container from mongo image on port 27017"
echo "command needs to be started here due to path to data folder"
sudo docker run -d --rm -p 27017:27017 --name mernshop -v $(pwd)/data:/data mongo:latest