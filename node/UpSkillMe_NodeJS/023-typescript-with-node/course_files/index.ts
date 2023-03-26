import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";

import routes from "./src/routes/crmRoutes";
import Messenger from "./src/controllers/createMessage";

const app = express();

export enum Settings {
  port = 3000,
  databaseUrl = "mongodb://localhost:27017/tscrm",
}

let messenger = new Messenger(Settings.port);

interface Name {
  firstName: string;
}

interface Name {
  // we can create multiple interfaces with the same name
  // they would merge together
  lastName?: string;
}

function nameCreator(name: Name): string {
  return `Hello, ${name.firstName},`;
}

const myName: Name = { firstName: "Arkadii" };

// mongoose connection
// mongoose.Promise = global.Promise; // don't need to use in that course
mongoose.connect(Settings.databaseUrl, {
  // compared to MLab using local DB
  useMongoClient: true,
  // useUnifiedTopology: true,
  // useNewUrlParser: true,
});

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static("public"));

app.get("/", (req, res) => res.send(messenger.messagePrint()));

app.listen(Settings.port, () =>
  console.log(nameCreator(myName), messenger.messagePrint())
);
