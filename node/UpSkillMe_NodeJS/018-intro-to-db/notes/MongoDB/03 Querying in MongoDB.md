Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
Completed by Arkadii Semenov on 2023-02-07

#### Querying

The query command to the DB isn't executed right away, DB creates a curson, which iterate through the results, and returns the results only when they are requested.

#### Querying operators: Skip Limit Sort

We can use different operators to managed the data we need to find.
**NB!** The operators can be chained together, but the order doesn't matter!

Example:

```js
db.recipes.find()
  .sort({"title": 1}) // Sort by the specified value, teh number means
                        //  1 - ascending
                        // -1 - descending
  .limit(2) // Limit the number of results returned (EX: first two)
  .skip(5); // Skip the first 5 values from the results

db.recipes.find()
  .count(); // returns the number of results found
-->> 7
```

#### Operators and Arrays

Because MongoDB uses JSON for all its work, we need to redefine all needed operators as strings:

```js
- $gt - Greater than
- $lt - Less than
- $gte - Greater than or equal
- $lte - Greater than or equal
- $lte - Greater than or equal
- $lte - Greater than or equal
Example of code:

db.recipes.find({"cook_time": { $lte : 30 }}, {"title": 1})
// Find and show titles of all recipes which have time for cooking less than equal to 30 minutes

db.recipes.find({
    "cook_time": { $lte : 30 }, // Comma works as AND operator
    "prep_time": { $lte : 10 }
  }, {"title": 1})
// Find and show titles of all recipes which have time for cooking less than equal to 30 minutes AND time for preparations less than equal to 10 minutes

db.recipes.find({
    $or: [
      {
        "cook_time": { $lte : 30 }
      }, // insert all te possible combinations into an array
      {
        "prep_time": { $lte : 10 }
      }
    ]
  }, {"title": 1})
// Find and show titles of all recipes which have time for cooking less than equal to 30 minutes OR time for preparations less than equal to 10 minutes

db.recipes.find({
    "tags": "easy" // because tags -> array, the program would search for all documents, which tags value contains the name "easy"
  }, {"title": 1, "tags": 1})
// Find and show titles and tags of all recipes with tag "easy"

db.recipes.find({
    "tags": ["easy", "mexican"] // because we inserted an array the program would search only for the **exact match**
  }, {"title": 1, "tags": 1})
// Find and show titles and tags of all recipes only with tags "easy" and "mexican"

db.recipes.find({
    "tags": {$all: ["easy", "mexican"]} // will work as AND
  }, {"title": 1, "tags": 1})
// Find and show titles and tags of all recipes with tag "easy" AND "mexican"

db.recipes.find({
    "tags": {$in: ["easy", "mexican"]} // will work as OR
  }, {"title": 1, "tags": 1})
// Find and show titles and tags of all recipes with tag "easy" OR "mexican"

db.recipes.find({
    "ingredients.name": "egg"
    // Here we can use the dots notation
    // Because ingredients is an array of objects, we can apply the same rules
    // as with objects, by getting to the properties of objects with dot notation
  }, {"title": 1})
// Find and show titles of all recipes with eggs as an ingredient

db.recipes.find({
    "ingredients": {"name": "egg"} // Won't work, it would look for exact match!
  }, {"title": 1})
```

#### Updating Documents

- Use `updateOne` if you need to update a single field in a single document.
- Use `update` if you need to update multiple documents.

We also have multiple operators to update information:

- $set - update value or if it doesn't find the needed field to update it would insert it
- $unset - delete key
- $inc - increment the value without checking the value before that

```js
db.examples.updateOne( // update the first one from the data
  { "title": "Pizza" }, // check data with title Pizza
  { $set: {"title": "Thin crust pizza" } }
  // update the value of "title" with "Thin crust pizza"
  // if it doesn't find the needed field to update it would insert it
);
->> {
  "acknowledged": true,
  "matchedCount": 1,
  "modifiedCount": 1
}

db.examples.updateOne( // update the first one from the data
  { "title": "Pizza" }, // check data with title Pizza
  { $unset: {"vegan": 1 } }
  // delete the key with some data
);
->> {
  "acknowledged": true,
  "matchedCount": 1,
  "modifiedCount": 1
}

db.examples.updateOne( // update the first one from the data
  { "title": "Pizza" }, // check data with title Pizza
  { $inc: {"likes_count": 1 } } // "likes_count" += 1 (can be 100, -1, 2991, ...)
  // It is really useful, because:
  // - we can guarantee the field will always de/increase by proper amount
  // - it is atomic operation
  // - no locks or transactions
);
->> {
  "acknowledged": true,
  "matchedCount": 1,
  "modifiedCount": 1
}
```

#### Updating array's data

To update array data we can use operators:

1. $push - add item to the array
2. $pull - delete item from the array
3. There is more other operators

```js
db.examples.updateOne(
  { title: "Tacos" },
  { $push: { likes: 60 } } // Add value 60 to the array of likes
);

db.examples.updateOne(
  { title: "Tacos" },
  { $pull: { likes: 60 } } // Remove value 60 to the array of likes
);
```

#### Deleting Documents

Sometimes we need to delete unnecessary information, so we can use:

1. `deleteOne` - to delete the first occurrence, this is safer
2. `deleteMany` - to delete all the occurrences

```js
db.example.deleteOne(
  {"_id": ObjectId("...")}
) // would delete the document with the specified id


db.example.deleteMany(
  {"likes": []}
) // would delete all documents

```

Further reading:

1. [Query an Array – MongoDB Manual](https://docs.mongodb.com/manual/tutorial/query-arrays/)
2. [Update Documents – MongoDB Manual](https://docs.mongodb.com/manual/tutorial/update-documents/)
3. [Delete Documents – MongoDB Manual](https://docs.mongodb.com/manual/tutorial/remove-documents/)
