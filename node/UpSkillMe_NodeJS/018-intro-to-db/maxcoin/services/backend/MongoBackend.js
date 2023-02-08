const { MongoClient } = require('mongodb');

// Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
// Completed by Arkadii Semenov on 2023-02-08
// Install mongodb - MongoDB driver for node.js with npm.

/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const CoinAPI = require('../CoinAPI');


class MongoBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.mongoUrl = "mongodb://localhost:37017/maxcoin";
    this.client = null;
    this.collection = null;
    this.connected = false;
  }

  async connect() {
    const mongoClient = new MongoClient(this.mongoUrl, {
      useUnifiedTopology: true, // Use new functionality and avoid deprecation warnings
      useNewUrlParser: true,
    });

    mongoClient.on('open', () => { this.connected = true; console.info("Successfully connected to mongodb") });
    mongoClient.on('topologyClosed', () => { this.connected = false; console.info("Disconnected from mongodb") });

    this.client = await mongoClient.connect();
    this.collection = this.client.db("maxcoin").collection("values"); // we tell that we are using this database

    return this.client;
  }

  async disconnect() {
    if (this.client) {
      return this.client.close();
    }
    return false;
  }

  async insert() {
    const data = await this.coinAPI.fetch();
    const documents = [];

    Object.entries(data.bpi).forEach((entry) => {
      documents.push({
        date: entry[0],
        value: entry[1],
      });
    });

    return this.collection.insertMany(documents);
    // insertMany is better for multiple entries, adds documents ot the collection

  }

  async getMax() {
    return this.collection.findOne({}, { sort: { value: -1 } });
    // get the first value from descending sorted value === get max 
  }

  async max() {
    console.info("Connecting to MongoDB");
    console.time("mongodb-connect"); // used to check the required time
    const client = await this.connect();
    console.timeEnd("mongodb-connect");

    if (this.connected) {
      console.info("Successfully connected");
    } else {
      throw new Error("Failed to connect to the DB")
    }

    console.info("inserting to mongodb");
    console.time("mongodb-insert");
    const insertResult = await this.insert();
    console.timeEnd("mongodb-insert");

    console.info("Querying from mongodb");
    console.time("mongodb-find");
    const doc = await this.getMax();
    console.timeEnd("mongodb-find");

    console.info(`Inserted ${insertResult.insertedCount} documents into mongodb`);

    console.info("Disconnecting from MongoDB");
    console.time("mongodb-disconnect"); // used to check the required time
    await this.disconnect();
    console.timeEnd("mongodb-disconnect");

    return {
      date: doc.date,
      value: doc.value,
    };
  }
}

module.exports = MongoBackend;