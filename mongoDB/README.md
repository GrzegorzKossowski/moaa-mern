# MongoDB - localhost

## Setup local docker database from scratch

1. install docker
2. cd ./mongoDB
3. create dir `./mongoDB/data` if not exists
4. run cmd command (linux): `sudo docker run -d --rm -p 27017:27017 --name mernshop -v $(pwd)/data:/data/db mongo:latest`

How to get to db
1. from cmd run `docker exec -it mernshop bash`
2. from inside container get into mongo `mongosh`
3. list dbs `show dbs`
4. use db `use {dbName}`
5. show collections `show tables`
