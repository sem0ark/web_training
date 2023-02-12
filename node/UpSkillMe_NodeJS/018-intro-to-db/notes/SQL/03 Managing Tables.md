Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

## Creating tables

We can use `create` to create a new table for the DB, while creating we need to specify all the conditions and specification for the columns.

This specification is usually called as a database schema.

Example:

```sql
CREATE TABLE test ( -- the name of the table
  a INTEGER, -- the name of the column in the table + the type
  b TEXT     -- another column, another type
  -- you can't have a comma on the last column
);

INSERT INTO test VALUES (1, 'a');
-- without defining into which rows to insert into
-- the program would interpret it as the whole row
INSERT INTO test VALUES (2, 'b');
INSERT INTO test VALUES (3, 'c');
SELECT * FROM test;
```

## Deleting a table

We can also remove the table by teh usage of `DROP` statement.

```sql
CREATE TABLE IF NOT EXISTS test
-- we would create a new table only in case it is not here
-- if we need to create a new version of the table we would need
-- to delete teh table first
( a INTEGER, b TEXT );


INSERT INTO test VALUES (1, 'a');
INSERT INTO test VALUES (2, 'b');
INSERT INTO test VALUES (3, 'c');
SELECT * FROM test;

DROP TABLE test;
-- delete the table, we would get an error if it is not here

DROP TABLE IF EXISTS test;
-- delete the table only if it is here
```

## Inserting updated!

Here is some additional functionality for `INSERT`statement.

Example

```sql
CREATE TABLE test (a INTEGER, b TEXT, c TEXT);

INSERT INTO test VALUES (3, 'b', 'c');
-- just insert the values

INSERT INTO test (b, c) VALUES ('a', 'b');
-- insert the values into specific columns,
-- all other data would be NULL as a default value

INSERT INTO test DEFAULT VALUES;
-- here we just insert a row of defaults, which is NULL in that case

INSERT INTO test (a, b, c)
  SELECT id, name, description from item;
-- we can also pass the SELECT statements

SELECT * FROM test;
```

## Deleting updated!

```sql
DELETE FROM test WHERE a = 3;
-- deleting from table is hard to recover,
-- so we should be cautious with this operation
-- instead of typing directly DELETE:
-- 1. we can switch it with SELECT *
-- 2. see the result
-- 3. if all the selected rows we want to delete switch it back to DELETE and run the command


SELECT * FROM test;
```

## NULL Value

It is very important to distinguish it from empty strings or NaN.
NULL is not a value, it is lack of value, so `WHERE a = NULL` won't work.

To test for NULL we should use `WHERE a IS NULL`, opposite of `WHERE a IS NOT NULL`.

> So, 0 != NULL != ''.

Example:

```sql
CREATE TABLE test (a INTEGER, b TEXT, c TEXT);

SELECT * FROM test WHERE b IS NULL;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
  -- here we can see that we can add additional options to the columns
  a INTEGER NOT NULL,
  -- NOT NULL statement would specify that the values in this columns can't be NULL,
  -- so any attempts to insert NULL value would result in an error
  b TEXT NOT NULL,
  c TEXT
);

INSERT INTO test VALUES (1, NULL, '');     -- -> ERROR
INSERT INTO test (b, c) VALUES ('1', '2'); -- -> ERROR
INSERT INTO test VALUES (1, '', '');       -- -> OK
```

## Column constraints

If we need to specify the type of values in the DB, we should add additional constraints to our table definitions.

```sql
DROP TABLE IF EXISTS test;

CREATE TABLE test (
  a INTEGER UNIQUE,
  -- -> inserting the same value would throw an error
  -- BUT -> !!!it works with multiple NULL values!!! it is implementation dependent, so consider using NOT NULL
  b TEXT NOT NULL,  -- -> inserting NULL would throw an error
  c TEXT DEFAULT 'default' -- -> inserting NULL would be switched to inserting a default value for the column
);
```
