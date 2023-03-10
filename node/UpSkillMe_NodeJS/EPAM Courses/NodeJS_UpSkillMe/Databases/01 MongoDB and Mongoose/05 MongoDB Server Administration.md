  
Links:
- [Previous](04%20MongoDB%20Data%20and%20schema%20modeling.md)
- [Next](06%20Mongoose.md)

Tags: #notes/web/epam/upskillme #sci/pro/tech/db/mongodb

Date: [20230208](../../../../../200%20Diary/205%20Day/20230208.md)
Time: 20:25:29
_____

Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
Completed by Arkadii Semenov on 2023-02-08

## MongoDB config file

All configuration for MongoDB is stored in YAML files.

```yml
SystemLog:
  destination: file
  path: some/path/to/log/file.log
  logAppend: true
storage:
  dbPath: path/to/the/database
  directoryPerDB: true
  # we would be able to separate all DB's on separate disks and paths
net:
  bindIp: 127.0.0.1 # can be changed for security reasons
  port: 27017 # can be changed for security reasons
  maxIncomingConnections: 65536 # used for security
processManagement:
  fork: true
  # specify that the DB would run on the background
  # it should be used ni production
security: # used for security reasons
  authorization: enabled # all users of the DB would be required to authenticate before usage
  javascriptEnabled: true # allow JS to run, a bit security issue
replication: # replication
  replSetName: cookerSet # the name of replicas
```

Running the MongoDB Server with the specified config:

```
mongod --config=path/to/your/config.cfg
```

## Replication

Running a single DB is a good start solution, but we should store backups somewhere or running some additional DB's to support and change the main one.

MongoDB uses the second solution which is called replica sets. It runs copies the DB to keep the data safe, you should run replicas in different machines in production.

Example with Docker:

```bash
- docker exec -it ubuntu /bin/bash
$ mkdir -p /store/data
$ cd /store/data
$ mkdir rs1 # create different directories for every replica
$ mkdir rs2
mkdir rs3

#=== === in another process === ===
$ mongod --replSet cookerSet --dbport=/store/data/rs1 --port 27017 --smallFiles --opblogSize 200 # process one
$ mongod --replSet cookerSet --dbport=/store/data/rs2 --port 27018 --smallFiles --opblogSize 200 # process one
$ mongod --replSet cookerSet --dbport=/store/data/rs3 --port 27019 --smallFiles --opblogSize 200 # process one

#=== === going back === ===
mongo --port 27017 # log into the first DB process

...:PRIMARY> config = {
  _id: "cookerSet",
  "members": [
    {_id: 0, host: "localhost:27017"},
    {_id: 1, host: "localhost:27018"},
    {_id: 2, host: "localhost:27019"},
  ]
}

...:PRIMARY> rs.initiate(config) # starts the processes
...:PRIMARY> rs.status() # shows the status of all teh processes
...:PRIMARY> db.isMaster() # also get information
...:PRIMARY> db.test.testo.insertOne({}) # would run on all replicas too
...:PRIMARY> db.isMaster() # also get information
...:PRIMARY> exit # log out of the primary

mongo --port 27018 # try to log into secondary DB
...:SECONDARY> show dbs # would result in an error
# to change we should specify "slaveOk": true
...:SECONDARY> exit

$ mongo "mongodb://localhost:27017,localhost:27018,localhost:27019/?replicaSet=cookerSet"
# to properly connect to the replica set we should use the connection string
```

## Sharding

Sharding - breaking the data into multiple DB's to store separately, it can increase performance and flexibility, but add some complexity to our system.

MongoDB can do it automatically, which is rare!

> Sharding isn't easy:
>
> 1. Don't do it if you don't need to.
> 2. Adds complexity to the system.

A MongoDB sharded cluster consists of the following components:

- `shard`: Each shard contains a subset of the sharded data. Each shard can be deployed as a replica set.
- `mongos`: The mongos acts as a query router, providing an interface between client applications and the sharded cluster.
- `config servers`: Config servers store metadata and configuration settings for the cluster.
- `shard key`: something like a table of contents to understand which data is where. Uses config server to understand the data.

### How is you data sharded?

1. We need to enable sharding
2. We need to specify what to shard and by what index (e.g. "title" value)
3. The location of data is stored on the config servers.
4. Understand the most popular queries to get the right idea of how to shard the data.

## Authentication and authorization

1. Authentication - logging in
2. Authorization - limiting access, different roles for access control

#### Configuring

1 - Switch to the admin DB

2 - Run teh following command

```js
db.createUser({
  user: "username",
  pwd: passportPrompt(), // ask the passport in the prompt
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    "readWriteAnyDatabase",
  ],
});

db.adminCommand({ shutdown: 1 }); // stop the process
```

Now in the config file:

```yml
# === === in config file === ===
security:
  authorization: enabled
```

How to authenticate?

```bash
# run with the connection, enter the credentials, use -p to enter the password
mongo --authenticationDatabase "admin" -u "username" -p

# === === in case you are already running the DB === ===
> use admin
> db.auth("username", passwordPrompt());
1 # we successfully logged in
```

## Backups

1. Copying files - manual and boring method
2. Using mongodump and mongorestore

#### Copying files

1 - Enter your database

2 - Run the following command

```bash
> db.fsyncLock();
# things are still writing into the DB, but it is in RAM temporarily
# so we should quickly copy files and restore the access

$ cd -R /data/db/* ../../another/place/to/store/data # copying recursively

> db.fsyncUnlock();
# after copying the files return to the DB
# the only risk
#  - if anything goes wrong during thr backup unsaved data may be lost
```

> The best manual solution - copy the data from the replica set.
> Then you won't have problems with time at all.

#### Using mongodump and mongorestore

```bash
$ mongodump # it would save all the files into the dump folder
$ mongorestore /dump/directory
```

Further reading:

1. [Replication – MongoDB Manual](https://docs.mongodb.com/manual/replication/)
2. [Sharding – MongoDB Manual](https://docs.mongodb.com/manual/sharding/)
