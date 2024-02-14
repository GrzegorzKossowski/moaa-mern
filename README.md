# MOAA-MERN - Mother Of All Applications

## MongoDB - localhost

To avoid the fact that mongodb.com periodically shuts down unused databases after a certain period of time, the project uses a local database. To use it, you need to start the mongodb container.

## Setup local docker database from scratch

1. install docker
2. cd ./mongoDB
3. create dir `./mongoDB/data` if not exists
4. run cmd command (linux): `sudo docker run -d --rm -p 27017:27017 --name mernshop -v $(pwd)/data:/data/db mongo:latest`

How to get to db

1. from cmd run `docker exec -it mernshop bash`
2. from inside container get into mongo `mongosh`
3. list dbs `show dbs`
4. use db `use mernshop`
5. show collections `show tables`

### External MongoDB

You can also use a database on the server. However, you will need to set environment variables for this purpose.

```
# MONGO_URI=mongodb+srv://{user}:{password}@{yourCluster}.{somenumber}.mongodb.net/mernshop
```

### .env variables

To run project you will need to set environment variables anyway.

```
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/mernshop?authSource=admin
JWT_SECRET={some-secret}
JWT_EXPIRES=3600000
VERSION=v1
```

### Populate database

To populate database with starting data, you need to use `./server/seeder.js`

```bash
cd ./server

# populate db
node seeder.js

# clear db
node seeder.js -d
```
