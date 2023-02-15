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
