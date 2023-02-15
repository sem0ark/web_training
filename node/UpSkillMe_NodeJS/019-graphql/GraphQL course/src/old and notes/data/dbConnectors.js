import mongoose from "mongoose";
import { Sequelize, DataTypes } from "sequelize";
import _ from "lodash";
import casual from "casual";


// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:37017/friends', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const friendSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  gender: { type: String },
  age: { type: Number },
  language: { type: String },
  email: { type: String },
  contacts: { type: Array },
});

const Friends = mongoose.model('friends', friendSchema);
console.log(Friends);


// connect to the SQLite
const sequelize = new Sequelize('sqlite:memory:');

const Aliens = sequelize.define('aliens', {
  firstName: { type: DataTypes.STRING },
  lastName: { type: DataTypes.STRING },
  planet: { type: DataTypes.STRING },
});

Aliens.sync({ force: true }).then(() => {
  _.times(10, (i) => {
    Aliens.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      planet: casual.word,
    });
  });
});

export { Friends, Aliens };
