/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
const mysql = require('mysql2/promise'); // use the promised types of functions

const CoinAPI = require('../CoinAPI');

class MySQLBackend {

  constructor() {
    this.coinAPI = new CoinAPI();
    this.connection = null;
  }

  async connect() {
    this.connection = await mysql.createConnection({
      host: "localhost",
      port: 3406,
      user: "root",
      password: "mypassword", // !!delete that piece of vulnerability later!!
      database: "maxcoin",
    });
    return this.connection;
  }

  async disconnect() {
    return this.connection.end();
  }

  async insert() {
    const data = await this.coinAPI.fetch(); // get the data from the api
    const sql = "INSERT INTO coinvalues (valuedate, coinvalue) VALUES ?";
    // actually the command to run

    const values = []; // the data
    Object.entries(data.bpi)
      .forEach((entry) => values.push([entry[0], entry[1]]));

    return this.connection.query(sql, [values]);
    // yes, here we need to insert array of arrays wrapped into array...
  }

  async getMax() {
    return this.connection.query(
      "SELECT * FROM coinvalues ORDER BY coinvalue DESC LIMIT 0,1"
    );
  }

  async max() {
    console.info("Connecting to MySQL");
    console.time("MySQL-connect"); // used to check the required time
    const connection = this.connect();
    console.timeEnd("MySQL-connect");

    if (connection) {
      console.info("Successfully connected");
    } else {
      throw new Error("Failed to connect to the DB")
    }

    console.info("inserting to MySQL");
    console.time("MySQL-insert");
    const insertResult = await this.insert();
    console.timeEnd("MySQL-insert");

    console.info("Querying from MySQL");
    console.time("MySQL-find");
    const result = await this.getMax();
    const row = result[0][0];
    console.timeEnd("MySQL-find");

    console.info(`Inserted ${insertResult[0].affectedRows} documents into MySQL`);

    console.info("Disconnecting from MySQL");
    console.time("MySQL-disconnect"); // used to check the required time
    await this.disconnect();
    console.timeEnd("MySQL-disconnect");

    return row;
  }
}

module.exports = MySQLBackend;