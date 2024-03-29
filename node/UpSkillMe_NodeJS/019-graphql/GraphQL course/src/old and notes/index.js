import express from 'express';
import { graphqlHTTP } from "express-graphql";

import { schema } from './data/schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

app.listen(8080, () => {
  console.log("Listening to the port 8080, localhost:8080/graphql");
});
