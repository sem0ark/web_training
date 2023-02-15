import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

// to make a more readable code we can use graphql tools instead of using buildSchema



const typeDefs = `
# we can create a custom types by using 'type' notation

  type Friend { # here we define the schema of the return values
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    language: String
    age: Int
    contacts: [Contact]!
    # emails: [Email2]! # a required list of objects
    # required here means it can't be null upon the return from the DB
  }

  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    OTHER
  }

  type Email2 {
    email: String
  }

  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  input FriendInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    language: String
    age: Int
    contacts: [ContactInput]
  }


  type Mutation { # the available mutations(changes) to the DB
    createFriend(input: FriendInput): Friend
    
    # here is means
    # mutation(method) name: createFriend
    # data as an input: input
    # the data would be returned as a signal of success: Friend object

  }

  type Query {
    # friend: Friend
    getFriend(id: ID): Friend
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };

/*
Queries:
mutation {
  createFriend(input: { // run the mutation and insert the input
    firstName: "John", // define the input fields
    lastName: "John",
    gender: MALE,
    email: "John.doe",
    contacts: [
      {firstName: "A", lastName: "B"},
      {firstName: "D", lastName: "C"},
    ],
  }){// from the return argument get the id, email, and first and last names of the contacts
    id
    email
    contacts {
      firstName
      lastName
    }
  }
}

Further reading:
1. [Schema and Types](https://graphql.org/learn/schema/)
*/