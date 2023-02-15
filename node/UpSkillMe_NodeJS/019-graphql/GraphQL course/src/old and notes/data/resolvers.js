import { Friends, Aliens } from './dbConnectors';

/*
const root = { hello: () => "Hi, it is me!" };

here we've hardcoded the query for graphql
so we "return" the data to the graphql

After that for query:
query {
  hello
}

We would get:
{
  "data": {
    "hello": "Hi, it is me!"
  }
}

If we've asked:
query {          # start the query
  friend {       # access the field friend
    lastName     # return the first name
    firstName    # return the last name
    gender       # return gender, but it is not provided by the root
  }
}

{
  "data": {
    "friend": {
      "firstName": "Test",
      "lastName": "Test",
      "gender": null
    }
  }
}
*/

// here we use the resolver to simulate the database
// resolver - functions for handling possible interactions with the database

// const friendDatabase = {};

// class Friend {
//   constructor(id, { firstName, lastName, gender, email, contacts }) {
//     this.id = id;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.gender = gender;
//     this.email = email;
//     this.contacts = contacts;
//   }
// }

// resolver map, now we can use graphql tools to attach it to the schema
export const resolvers = {
  Query: {
    getOneFriend: (root, { id }) => {
      return new Promise((resolve, object) => {
        Friends.findById(id, (err, friend) => {
          if (err) reject(err)
          else resolve(friend)
        })
      })
    },
    getAliens: () => {
      return Aliens.findAll();
    }
  },
  Mutation: {
    createFriend: (root, { input }) => {
      const newFriend = new Friends({
        firstName: input.firstName,
        lastName: input.lastName,
        gender: input.gender,
        language: input.language,
        age: input.age,
        email: input.email,
        contacts: input.contacts
      });

      newFriend.id = newFriend._id;

      return new Promise((resolve, object) => {
        newFriend.save((err) => {
          if (err) reject(err)
          else resolve(newFriend)
        })
      })
    },
    updateFriend: (root, { input }) => {
      return new Promise((resolve, object) => {
        Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
          if (err) reject(err)
          else resolve(friend)
        })
      })
    },
    deleteFriend: (root, { id }) => {
      return new Promise((resolve, object) => {
        Friends.remove({ _id: id }, (err) => {
          if (err) reject(err)
          else resolve('Successfully deleted friend')
        })
      })
    }
  },
};
