Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
Completed by Arkadii Semenov on 2023-02-07

## Data structuring

> "Data that is accessed together should be stored together"
> We should understand how to _embed_ some data into another.

You should understand that when accessed the whole document would be loaded into RAM, so you should maybe store huge amount of other data somewhere different.

We should store separately something accessed rarely accessed or huge in size:

1. Store with the recipe only top comments for example.
2. Store other comments somewhere else.

What to consider:

1. Will the data change and how often?
2. Can you store the data somewhere else without increasing teh amount of queries to make?

## Indexes

The idea -> **Indexes help queries zoom**:

1. Easily lookup a matching document,
2. Without scanning every document in your collection.

Commands:

1. `.getIndexes()` -> shows all available indexes
2. `.createIndex({"value_name": 1 / -1})` -> creates new index
3. `.dropIndex("index_name")` -> deletes index

Example:

```js
> db.recipes.find({"cook_time": 10}).explain("executionStats");
{
  ...
  "executionStats": {
    ...
    "totalDocsExamined": 7 // query had to check ALL the documents
  }
  ...
}

> db.recipes.find({"title": "Tacos"}).explain("executionStats");
{"executionStats": {
    "totalDocsExamined": 1 // Query used an indexing for titles
  }
}

> db.createIndex({"cook_time": -1}); // Creating the index, works like sorting
> db.recipes.getIndexes(); // Shows all used indexes
{
  {
    "v": 2,
    "key": {"_id": 1},
    "name": "_id_",
    "ns": "cooker.recipes"
  },
  {
    "v": 2,
    "key": {"cook_time": -1},
    "name": "cok_time_-1",
    "ns": "cooker.recipes"
  },
}

> db.recipes.dropIndex("cok_time_-1");
```

Indexes has a lot of different options such as:

1. `unique` -> the program will check if the values are unique.
2. Compound indexes can store multiple values

## Storing files with GridFS

Idea ->
"We can store entire file in out database and organize them with GridFS".

How is it working?

1. Break files up into chunks.
2. Chunks are stores in separate documents.
3. A parent document keeps track of file data.
4. The chunks are streamed via a MongoDB client.

How to access GridFS? -> use `mongofiles` in bin directory. In programming languages it can be done through client libraries and packages.

```
mongofiles --db=files list --quiet
// show files stored in database, --quiet for less text
// DB Contains fs_files and fs_chunks collections
// fs_files can contain custom data like title or credits

mongofiles get seattle.jpg --db=files
// it will download the file into the current directory

mongofiles put taco.jpg --db=files // it will add the file to the DB
mongofiles put book.pdf --db=files // it works with different file extensions

mongofiles delete seattle.jpg --db=files
// removing of a file
```

Further reading:

1. [Indexes – MongoDB Manual](https://docs.mongodb.com/manual/indexes/)
2. [GridFS – MongoDB Manual](https://docs.mongodb.com/manual/core/gridfs/)
