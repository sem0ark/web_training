  
Links:
- [Next](02%20GraphQL%20Queries%20and%20mutations.md)
- [01 Introduction to API design](../API%20Design/01%20Introduction%20to%20API%20design.md)

Tags: #notes/web #toprocess/tocreate

Date: [20230213](../../../../200%20Diary/205%20Day/20230213.md)
Time: 20:11:05
_____

Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-13

GraphQL is a query language which was created to query a data with expectable result. If you asked something you would what you want and nothing else.

There are a couple of types of GraphQL:

1. The first one is GraphQL from Facebook
2. There is also a version from the Apollo client

Initial setup is using babel:

1. env
2. stage-0

# Ideas of GraphQL

### Ask for what you need, get exactly that

Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results.

Apps using GraphQL are fast and stable because they control the data they get, not the server.

### Describe what’s possible with a type system

GraphQL APIs are organized in terms of types and fields, not endpoints.

Access the full capabilities of your data from a single endpoint.

GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can use types to avoid writing manual parsing code.

### Get many resources in a single request

GraphQL queries access not just the properties of one resource but also smoothly follow references between them.

While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.

### Evolve your API without versions

Add new fields and types to your GraphQL API without impacting existing queries. Aging fields can be deprecated and hidden from tools.

By using a single evolving version, GraphQL APIs give apps continuous access to new features and encourage cleaner, more maintainable server code.

### Bring your own data and code

GraphQL creates a uniform API across your entire application without being limited by a specific storage engine.

Write GraphQL APIs that leverage your existing data and code with GraphQL engines available in many languages. You provide functions for each field in the type system, and GraphQL calls them with optimal concurrency.

## Introduction to GraphQL

A GraphQL service is created by:

1. defining types and fields on those types
2. providing functions for each field on each type.

Example:

```graphql
type Query {
  me: User
}

type User {
  id: ID
  name: String
}
```

Further reading:

1. [Schema and Types](https://graphql.org/learn/schema/)
2. [Queries and Mutations](https://graphql.org/learn/queries/#fields)
3. [Cashing](https://graphql.org/learn/caching/)
