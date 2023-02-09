Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-09

# Introduction to key-value stores (Redis)

Key-value stores - very limited and fast.

1. _Redis_ stores the data in RAM with periodic snapshots, so you might loose the data while killing the process.
2. Very fast with often constant access time to the data
3. Good for ephemeral data
4. Common use cases:
   - Caching
   - Session storage
   - Short-lived data

Basic principle:

1. Works mostly like a HashMap (we have a key and value tied together)
2. Redis data types:
   - Strings (some data, from text to blobs)
   - Lists (linked lists)
   - SortedSets (all elements unique and sorted)
   - HashMaps (key-hash-value pairs)

To check the Redis data use **RedisInsight**.

Additional notes:

1. The connection is created lazily, so we won't have to make connect function async.

## Sessions with Redis

Redis usage for sessions is very common, because in production the server usually runs multiple
instance of Node.js, so in case we were using the standard session module:

1. User enters and registers on the site, so his/er session starts on one of the processes.
2. User gets the session ID to access the recorded data later.
3. When user enters the site once again, user can connect to another instance of node, and so loose the data.

But redis is available to all the instances + it supports clustering, so the sessions work as needed.

Further reading:

1. [An Introduction to Redis](https://redis.io/topics/introduction)
2. [An Introduction to Redis Data Types and Abstractions](https://redis.io/topics/data-types-intro)
