Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-15

## The request

The request to the GraphQL API looks like in REST with the payload:

```json
{
  "query": "Some query in GraphQL format",
  "variables": {
    "test": "Some variable"
  }
}
```

## Fields

At its simplest, GraphQL is about asking for specific fields on objects.

```graphql
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
    }
  }
}
```

Results in JSON:

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        { "name": "Luke Skywalker" },
        { "name": "Han Solo" },
        { "name": "Leia Organa" }
      ]
    }
  }
}
```

You can see immediately that the query has exactly the same shape as the result. This is essential to GraphQL, because you always get back what you expect, and the server knows _exactly what fields the client is asking for_.

## Arguments

In GraphQL, every field and nested object can get its own set of arguments, making GraphQL a complete replacement for making multiple API fetches.

You can even pass arguments into scalar fields.

```graphql
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}
```

```json
{ "data": { "human": { "name": "Luke Skywalker", "height": 5.6430448 } } }
```

## Aliases

aliases - they let you rename the result of a field to anything you want.

```graphql
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

```json
{
  "data": {
    "empireHero": { "name": "Luke Skywalker" },
    "jediHero": { "name": "R2-D2" }
  }
}
```

## Operation name

In several of the examples above we have been using a _shorthand_ syntax where we omit both the query keyword and the query name, in which case you can't supply a name or variable definitions for your operation. (in production isn't recommended way).

The operation type is either **query, mutation, or subscription**.
It describes what type of operation you're intending to do.

**Operation name** -> meaningful and explicit name for your operation. Think of this just like a function name in your favorite programming language.

It is only required in multi-operation documents, but its use is encouraged because it is very helpful for debugging and server-side logging.

## Variables

So far, we have been writing all of our arguments inside the query string. But in most applications, the arguments to fields will be dynamic.

> EX: there might be a dropdown that lets you select which Star Wars episode you are interested in, or a search field, or a set of filters.
>
> It wouldn't be a good idea to pass these dynamic arguments directly in the query string, because then:
>
> 1. Our client-side code would need to dynamically manipulate the query string at runtime,
> 2. and serialize it into a GraphQL-specific format.

Instead, GraphQL has a first-class way to factor dynamic values out of the query, and pass them as a separate dictionary. These values are called variables.

When we start working with variables, we need to do three things:

1. Replace the static value in the query with `$variableName`
2. Declare `$variableName` as one of the variables accepted by the query
3. Pass `variableName`: value in the separate, transport-specific (usually `JSON`) variables dictionary

#### Variable definitions

The variable definitions are the part that looks like:

1. `($variableName: TypeName)`.
2. Also `($variableName: TypeName!)` means required variable.
3. Also `($episode: Episode = JEDI)` means default value of the variable would be "JEDI".

All declared variables must be either scalars, enums, or input object types.

To learn more about the syntax for these variable definitions, it's useful to learn the GraphQL schema language.

## Fragments

_Fragments_ let you construct sets of fields, and then include them in queries where you need to. It is possible for fragments to access variables declared in the query or mutation.

Example:

```graphql
# the query of type HeroComparison
# access the variable $first of type Int and equals to 3
# hero() here returns a Character type

query HeroComparison($first: Int = 3) {
  leftComparison: hero(episode: EMPIRE) {
    # get the main character from EMPIRE episode
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    # get the main character from JEDI episode
    ...comparisonFields
  }
}

query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      # if the Character is also Droid
      # here we can see the inline fragment
      # it works in the same way as destructuring in JS
      primaryFunction
    }
    ... on Human {
      # if the Character is also Human
      height
    }
  }
}

fragment comparisonFields on Character {
  # use the fragment only for Character type
  name
  friendsConnection(first: $first) {
    # friends connection  receives the variable first of type Int
    # in our case it equals to 3
    totalCount
    edges {
      node {
        name
      }
    }
    # we get the specified data from the friends connection
  }
}
```

```json
{
  "ep": "JEDI",
  "first": 3
}
```

In this query, the hero field returns the type Character, which might be either a Human or a Droid depending on the episode argument. In the direct selection, you can only ask for fields that exist on the Character interface, such as name.

Named fragments can also be used in the same way, since a named fragment always has a type attached.

## Meta fields

```graphql
{
  search(text: "an") {
    # from the function search with argument "an"
    # get the data as an array with
    __typename # the type of a Character
    ... on Human {
      # if the Character is also a Human
      name
    }
    ... on Droid {
      # if the Character is also a Droid
      name
    }
    ... on Starship {
      # if the Character is also a Starship
      name
    }
  }
}
```

Given that there are some situations where you don't know what type you'll get back from the GraphQL service.

GraphQL services provide a few meta fields, the rest of which are used to expose the [Introspection](https://graphql.org/learn/introspection/) system.

## Directives

Passing variables in arguments solves a pretty big class of these problems, but we might also need a way to dynamically change the structure and shape of our queries using variables.

A directive can be attached to a field or fragment inclusion, and can affect execution of the query in any way the server desires.

- `@include(if: Boolean)` Only include this field in the result if the argument is true.
- `@skip(if: Boolean)` Skip this field if the argument is true.

Server implementations may also add experimental features by defining completely new directives.

```graphql
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}
```

```json
{
  // variables for the request
  "episode": "JEDI",
  "withFriends": false
}
```

Further reading:

1. [Pagination](https://graphql.org/learn/pagination/)
2. [Queries and Mutations](https://graphql.org/learn/queries/#fields)
