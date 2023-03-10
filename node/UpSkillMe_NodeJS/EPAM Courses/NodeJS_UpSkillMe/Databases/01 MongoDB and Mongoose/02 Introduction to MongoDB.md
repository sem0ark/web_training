  
Links:
- [Previous](01%20Introduction%20to%20Databases.md)
- [Next](03%20MongoDB%20Querying.md)

Tags: #notes/web/epam/upskillme #sci/pro/tech/db/mongodb

Date: [20230207](../../../../../200%20Diary/205%20Day/20230207.md)
Time: 20:23:36
_____

Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
Completed by Arkadii Semenov on 2023-02-07

## Intro

With MongoDB, you can store your data in the JSON format that makes it very easy to use, especially in JS, because JSON stands for JavaScript Object Notation. Sounds great, doesn't it? Let's learn more about MongoDB's ability to store and use data. Using the example application, you will explore how and why to use MongoDB. You will figure out how to install MongoDB on Windows and macOS and how you can import data. Let's delve into all these themes!

Advantages of MongoDB:

1. everything is stored in JSON -> modern document model
2. works with objects
3. very fast

When NOT to use document databases:

1. Highly structured and related -- think of a tax system
2. Data integrity is the key and has to be enforced at any time
3. Many different applications manipulate the data, and here again consistency has to be enforced on a database level.

When do you need to use it:

1. Data is semi/unstructured -- think about items in a shop or metric system
2. High write performance (possibly sacrificing consistency)
3. Scaling out to cluster-like systems

Contents:

1. how documents work
2. Querying MongoDB
3. Designing you database
4. Coding against it
5. Administering and scaling

### Installing and configuring

1. Download `MongoDB Community Server`
2. Install mongo and use it as a service in a background
3. Add to the PATH bin folder
4. Install `MongoDBCompass`
5. Install `Mongo Data Base Tools`
6. download as a `msi` package and insert the bins into folder of mongo bin (After quite a bit of pain and tears...)
7. also install `mongosh`
8. Add mongosh to the PATH

Example to test it is working:

1. run `mongo` or `mongosh`
2. /> show dbs
3. quit()
4. mongoimport --db cooker example.json
5. mongoimport --db cooker recipes.json

Further reading:

1. [Pros and Cons od MangoDB](https://www.virtual-dba.com/blog/pros-and-cons-of-mongodb/)

## Documents and collections

What is document? -> It is a field-value pairs stored in JSON-like BSON (binary JSON)

Connecting to teh database

1. Run mongosh, it is a mongo shell, btu it can also run any JavaScript!
2. `use db-name` to connect to needed DB

#### What we can store in documents?

We can contain not only text and numbers, we can also store a mix of different data. We can, for example, store arrays of something (strings, objects, nested objects, etc.).

We can store the data separately.

Collections - sets of similar data. They are used to separate different data and also optimize the data organization. They work mostly like tables.
The collection are then stored in databases.

```
> show dbs; -> shows all available DB's
> show collections; -> shows all available collections inside the current DB
> db.getName(); -> shows the current DB name

> db.cool_newStuff.insertOne();
> show collections;
->> cool_newStuff
examples
posts
...

> db.cool.newStuff.insertOne(); // we can also create nested collections, because they work in the same idea as the objects
->> cool_newStuff
examples
posts
...
```

There are even something as _cap collections_, which can store only a limited amount of documents at the same time.

#### Insert document

Example:

```js
> doc = {"title": "Tacos", "desc": "Yummy tacos", cook_time: 20};
->> {"title": "Tacos", "desc": "Yummy tacos", "cook_time": 20};

> db.tacos.insertOne(doc); // inserts the specified document
->> {
  "acknowledged": true,
  "insertId": ObjectId("object-id-here")
}

> db.tacos.find(); // returns all the data in collection
->> {"_id": ObjectId("object-id-here"), "title": "Tacos", "desc": "Yummie tacos", "cook_time": 20}

> db.tacos.find().pretty(); // returns all the data in collection in a readable manner
->> {
  "_id": ObjectId("object-id-here"),
  "title": "Tacos",
  "desc": "Yummie tacos",
  "cook_time": 20
}

> doc2 = {"title": "Dos Tacos", "desc": "Yummie tacos", cook_time: 20};
->> ...
> db.tacos.insertOne(doc2);
->> ...
> db.tacos.find().pretty(); // returns all the data in collection in a readable manner
->> {
  "_id": ObjectId("object-id-here"),
  "title": "Tacos",
  "desc": "Yummie tacos",
  "cook_time": 20
}
{
  "_id": ObjectId("object-id-here"),
  "title": "Dos Tacos",
  "desc": "Yummie tacos",
  "cook_time": 20
}
```

#### Querying documents for find()

find(findDocument={}, resultDocument={"title": 1}) works like query in SQL, we pass in the _findDocument_ and the function would return all records, which store the same data in fields specified with _findDocument_.
resultDocument - what the query should include into the result of the query, by `1` we specify to select only it, if `0` - works like select all but.

Also we can use regular expressions to searching.

Example:

```
> db.tacos.find({"title": "Tacos", "cook_time": 20}).pretty();
->> {... "title": "Tacos" ... }
{... "title": "Tacos" ... }

> db.tacos.find({"title": "Tacos", "cook_time": 20}, {"title": 1}).pretty();
->> {"_id": ..., "title": "Tacos"}

> db.tacos.find({"title": { $regex: /taco/i}}, {"title": 1}).pretty();

```

Further reading:

1. [Insert Documents – MongoDB Manual](https://docs.mongodb.com/manual/tutorial/insert-documents/)
2. [Query Documents – MongoDB Manual](https://docs.mongodb.com/manual/tutorial/query-documents/)
3. [Query on Embedded/Nested Documents – MongoDB Manual](https://docs.mongodb.com/manual/tutorial/query-embedded-documents/)
4. [MongoDB Data Modeling with Document Structure](https://medium.com/@rinu.gour123/mongodb-data-modeling-with-document-structure-a6e69de8e37f)
