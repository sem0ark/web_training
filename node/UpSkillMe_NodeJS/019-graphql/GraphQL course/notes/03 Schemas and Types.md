Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-15

## Type language

GraphQL services can be written in any language. We'll use the "GraphQL schema language" - it's similar to the query language, and allows us to talk about GraphQL schemas in a language-agnostic way.

## Object types and fields, example

The most basic components of a GraphQL schema are object types, which just represent a kind of object you can fetch from your service.

```graphql
type Character {
  name: String!
  appearsIn: [Episode!]!
}
```

- **Character** is a GraphQL Object Type, meaning it's a type with some fields.
- **name and appearsIn** are fields on the Character type. That means that name and appearsIn are the only fields that can appear in any part of a GraphQL query that operates on the Character type.
- **String** is one of the built-in scalar types - these are types that resolve to a single scalar object, and can't have sub-selections in the query.
- **String!** means that the field is non-nullable.
- **[Episode!]!** represents an array of Episode objects. Since it is also non-nullable, you can always expect an array (with zero or more items).

### Arguments

Every field on a GraphQL object type can have zero or more arguments, for example the `length` field below:

```graphql
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```

Arguments can be either required or optional. When an argument is optional, we can define a default value - if the unit argument is not passed, it will be set to METER by default.

### The Query and Mutation types

Every GraphQL service has a query type and may or may not have a mutation type.
They define the entry point of every GraphQL query.

```graphql
# if we can ask the following data we should also a query for it
query {
  hero {
    name
  }
  droid(id: "2000") {
    name
  }
}

## Schema file:
type Query {
  hero(episode: Episode): Character
  droid(id: ID!): Droid
}
```

## Types

### Scalar types

A GraphQL object type has a name and fields, but at some point those fields have to resolve to some concrete data.

- Int: A signed 32‐bit integer.
- Float: A signed double-precision floating-point value.
- String: A UTF‐8 character sequence.
- Boolean: true or false.
- ID: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache.

In most GraphQL service implementations, there is also a way to specify custom scalar types: `scalar Date`.

Then it's up to our implementation to define how that type should be serialized, deserialized, and validated.

### Enumeration types

Type that can contain some discrete number of values:

```graphql
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

### Lists and Non-null

But when you use the types in other parts of the schema, or in your query variable declarations, you can apply additional type modifiers that affect validation of those values.

Let's look at an example:

```graphql
type Character {
  name: String! # ! means non-null, if it is null then an error would occur!
  appearsIn: [Episode]! # [] mean array of some items type Episode
}

# myField: [String!] means:
# - myField: null // valid
# - myField: [] // valid
# - myField: ['a', 'b'] // valid
# - myField: ['a', null, 'b'] // error

# myField: [String]! means:
# - myField: null // error
# - myField: [] // valid
# - myField: ['a', 'b'] // valid
# - myField: ['a', null, 'b'] // valid
```

## Interfaces

Like many type systems, GraphQL supports interfaces. An Interface is an abstract type that includes a certain set of fields that a type must include to implement the interface.

```graphql
interface Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
}

type Human implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  starships: [Starship]
  totalCredits: Int
}

type Droid implements Character {
  id: ID!
  name: String!
  friends: [Character]
  appearsIn: [Episode]!
  primaryFunction: String
}

# now we can use it in query:
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
  }
}
```

## Union types

Union types are very similar to interfaces, but they don't get to specify any common fields between the types.

```graphql
union SearchResult = Human | Droid | Starship
```

Note that members of a union type need to be concrete object types; you can't create a union type out of interfaces or other unions.

```graphql
{
  search(text: "an") {
    __typename # we can use the type of the data to understand the result
    ... on Character {
      # we can also use the results of interfaces
      # would work for Human and Droid
      name
    }
    ... on Human {
      height
    }
    ... on Droid {
      primaryFunction
    }
    ... on Starship {
      name
      length
    }
  }
}
```

## Input types

So far, we've only talked about passing scalar values, like enums or strings, as arguments into a field. But you can also easily pass complex objects.

The fields on an input object type can themselves refer to input object types, but you can't mix input and output types in your schema.

Input object types also can't have arguments on their fields.

```graphql
input ReviewInput { # the input type definition
  stars: Int!
  commentary: String
}

# mutation query
mutation CreateReviewForEpisode($ep: Episode!, $review: ReviewInput!) {
  createReview(episode: $ep, review: $review) {
    stars
    commentary
  }
}
# variables
{
  "ep": "JEDI",
  "review": {
    "stars": 5,
    "commentary": "This is a great movie!"
  }
}
```
