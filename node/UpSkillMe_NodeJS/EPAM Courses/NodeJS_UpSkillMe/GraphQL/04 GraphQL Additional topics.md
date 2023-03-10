  
Links:
- [Previous](03%20GraphQL%20Schemas%20and%20Types.md)

Tags: #notes/web #toprocess/tocreate

Date: [20230217](../../../../200%20Diary/205%20Day/20230217.md)
Time: 20:13:30
_____

Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-15

After being validated, a GraphQL query is executed by a GraphQL server which returns a result that mirrors the shape of the requested query, typically as JSON.

You can think of each field in a GraphQL query as a _function or method_ of the previous type which returns the next type.

Each field on each type is backed by a function called the resolver which is provided by the GraphQL server developer.

If a field produces a scalar value like a string or number, then the execution completes. However if a field produces an object value then the query will contain another selection of fields which apply to that object. This continues until scalar values are reached. GraphQL queries always end at scalar values.

Let's check and examine the execution of the schema:

```graphql
type Query {
  human(id: ID!): Human
}

type Human {
  name: String
  appearsIn: [Episode]
  starships: [Starship]
}

enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}

type Starship {
  name: String
}

# === querying ===
query {
  human(id: 1002) {
    name
    appearsIn
    starships {
      name
    }
  }
}
```

## Root fields & resolvers

At the top level of every GraphQL server is a type that represents all of the possible entry points into the GraphQL API.

It's often called the _Root type_ or the Query type.

```js
const root = {
  Query: {
    human(obj, args, context, info) {
      // field called human which accepts the argument id

      return context.db
        .loadHumanByID(args.id)
        .then((userData) => new Human(userData));
      // Since loading from a database is an asynchronous operation, this returns a Promise.
    },
  },
};
```

Notice that while the resolver function needs to be aware of Promises, the GraphQL query does not.
**GraphQL will wait for Promises, Futures, and Tasks to complete before continuing** and will do so with optimal concurrency.

- **obj** - The previous object, which for a field on the root Query type is often not used.
- **args** - The arguments provided to the field in the GraphQL query.
- **context** - A value which is provided to every resolver and holds important contextual information like the currently logged in user, or access to a database.
- **info** - A value which holds field-specific information relevant to the current query as well as the schema details, also refer to type GraphQLResolveInfo for more details.

## Caching

> Providing Object Identifiers allows clients to build rich caches.

The URL in these APIs is a globally unique identifier that the client can leverage to build a cache. In GraphQL, though, there's no URL-like primitive that provides this globally unique identifier for a given object.

One possible pattern for this is reserving a field, like id, to be a globally unique identifier.

Optionally, this ID can then be used to work with the [Global Object Identification's](https://graphql.org/learn/global-object-identification) node pattern.

One concern with using the id field for this purpose is how a client using the GraphQL API would work with existing APIs.

In these cases, the GraphQL API can expose the previous API's IDs in a separate field. This gives us the best of both worlds:

- GraphQL clients can continue to rely on a consistent mechanism for getting a globally unique ID.
- Clients that need to work with our previous API can also fetch previousApiId from the object, and use that.

Oftentimes, this would be as simple as combining the type of the object (queried with \_\_typename) with some type-unique identifier.

Additionally, if replacing an existing API with a GraphQL API, it may be confusing if all of the fields in GraphQL are the same except id, which changed to be globally unique.

## Authorization

Defining authorization logic inside the resolver is fine when learning GraphQL or prototyping. However, for a production codebase, delegate authorization logic to the business logic layer.

Here’s an example:

```js
//Authorization logic lives inside postRepository
var postRepository = require('postRepository');

var postType = new GraphQLObjectType({
  name: ‘Post’,
  fields: {
    body: {
      type: GraphQLString,
      resolve: (post, args, context, { rootValue }) => {
        return postRepository.getBody(context.user, post);
      }
    }
  }
});
```

In the example above, we see that the business logic layer requires the caller to provide a user object.
If you are using GraphQL.js, the User object should be populated on the context argument or rootValue in the fourth argument of the resolver.

### Authentication

To use middleware with a GraphQL resolver, just use the middleware like you would with a normal Express app. The request object is then available as the second argument in any resolver.

We can do the former with middleware, and the latter by accessing the request object in a resolver. Here's server code that implements this:

In a REST API, authentication is often handled with a header, that contains an auth token which proves what user is making this request.

```js
var express = require("express");
var { graphqlHTTP } = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(`
  type Query {
    ip: String
  }
`);

const loggingMiddleware = (req, res, next) => {
  console.log("ip:", req.ip);
  next();
};

var root = {
  ip: function (args, request) {
    return request.ip;
  },
};

var app = express();
app.use(loggingMiddleware);
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");
```
