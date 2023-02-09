/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */

const Redis = require('ioredis');

const CoinAPI = require('../CoinAPI');

class RedisBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.client = null;
  }

  connect() {
    this.client = new Redis(7379); // works lazily
    return this.client;
  }

  async disconnect() {
    return this.client.disconnect();
  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const values = [];
    Object.entries(data.bpi).forEach((entry) => {
      values.push(entry[1]);
      values.push(entry[0]);
      // we push tuples (value, score) to the Sorted Set in Redis
    });

    return this.client.zadd('maxcoin:values', values);
    // Add multiple values into redis as a SortedSet with Scores
  }

  async getMax() {
    return this.client.zrange('maxcoin:values', -1, -1, 'WITHSCORES');
    // -1 - last element, until -1 - last element
    // WITHSCORES - return the value(e.g. date) and score(e.g. course)
  }

  async max() {
    console.info("Connecting to MongoDB");
    console.time("redis-connect"); // used to check the required time
    const client = this.connect();
    console.timeEnd("redis-connect");

    if (client) {
      console.info("Successfully connected");
    } else {
      throw new Error("Failed to connect to the DB")
    }

    console.info("inserting to redis");
    console.time("redis-insert");
    const insertResult = await this.insert();
    console.timeEnd("redis-insert");

    console.info("Querying from redis");
    console.time("redis-find");
    const result = await this.getMax();
    console.timeEnd("redis-find");

    console.info(`Inserted ${JSON.stringify(insertResult)} documents into redis`);

    console.info("Disconnecting from redis");
    console.time("redis-disconnect"); // used to check the required time
    await this.disconnect();
    console.timeEnd("redis-disconnect");

    return result;
  }
}

module.exports = RedisBackend;