// const CoinAPI = require("./services/CoinAPI");
const MongoBackend = require("./services/backend/MongoBackend");

async function run() {
  const mongoBackend = new MongoBackend();
  return mongoBackend.max();

  // const coinAPI = new CoinAPI();
  // return coinAPI.fetch();
}

run()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.error(err));
