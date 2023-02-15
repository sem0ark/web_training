import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';
import resolvers from './data/resolvers';

const app = express();

app.get('/', (req, res) => {
    res.send('GraphQL is amazing!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema, // add the parsed schema object
    rootValue: root, // add the starting point for all the requests
    graphiql: true, // also use the GUI provided by GraphQL
}));

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
