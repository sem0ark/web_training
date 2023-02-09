// const CoinAPI = require("./services/CoinAPI");
const MongoBackend = require("./services/backend/MongoBackend");


// Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
// Completed by Arkadii Semenov on 2023-02-08

/**
 * Introduction to mongoose
 * Working with queries in OOP world is somewhere unnatural
 * Here to help comes **Object-document mapper short audion**
 *    for different document DB's
 * In our case it is _mongoose_.
 * 
 * Schemas in mongoose:
 * 1. mongoose creates schemas in our app to standardize the manipulation with the 
 *    data we have in our database.
 *    Even if it is NoSQL we still need to somehow understand what we are storing.
 * 2. By the usage of Schema we can create the "classes" for our data objects.
 * 3. We create a schema with:
 * 
 * ```js
 * const NameSchema = mongoose.Schema('name', {
 *    model: String,
 *    value2: Number,
 *    value3: {
 *      value3_1: Number,
 *      value3_2: Number,
 *    }
 * });
 * 
 * const Car = mongoose.model("Car", NameSchema);
 * 
 * const myCar = new Car({..enter the data..}); // we can create new objects
 * myCar.save(); // and save them
 * 
 * const theMustang = await Car.findOne({model: "Mustang"});
 * // we can also query existing ones
 * // in this way we mostly shouldn't even bother thinking about collections
 * 
 * theMustang.value2 = 1919;
 * theMustang.save(); // if we change the object and then save,
 * // we would update the data in the DB
 * ```
 * 
 * 
 * We can also add additional data and property specifiers. 
 * 
 * Example:
 * We create classes with additional methods like a Car(makes, model, year)
 * ```js
 * Car.save() -> provided logic to save the data to the DB
 * car = new Car(......)
 * car.save()
 * ```
 * ### Static and instance methods
 * We can add additional methods to our classes by using `statics` property.
 * 
 * Example:
 * ```js
 * // It is a static method defined for all cars
 * CarSchema.statics.findByMake = async function byMake(make) {
 *    return this.find({make});
 * }
 * 
 * CarSchema.methods.honk = async function hock(make) {
 *    console.info(`${this.make} honks`);
 *    // we can also define the instance methods which interact with the objects in the DB.
 * }
 * const theMustang = await Car.findOne({model: "Mustang"});
 * theMustang.honk();
 * // Mustang honks
 * ```
 * 
 * **NB! Don't add business logic with side effects into your model.**
 * 
 * **NB! Beware N+1 Problems**
 * 
 * For example:
 * ```js
 * getAllCars().populate("_owner");
 * 1000 cars = 1001 queries (N+1) // very inefficient!!!
 * ```
 * 
 * Further reading:
 * 1. [Introduction to Mongoose for MongoDB](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/#:~:text=Mongoose%20is%20an%20Object%20Data,of%20those%20objects%20in%20MongoDB)
 */

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
