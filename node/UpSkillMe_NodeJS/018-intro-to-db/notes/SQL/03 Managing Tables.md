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
DROP TABLE IF EXISTS test;
CREATE TABLE test ( a INTEGER, b TEXT );
-- we would create a new table only in case it is not here
-- if we need to create a new version of the table we would need
-- to delete the table first


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

## Changing a schema

Sometimes you need to change the table structure after creating the table. We can use the statement `ALTER TABLE` to do this.

Be careful to change other code if you've changed the table!

Example:

```sql
DROP TABLE IF EXISTS test;
CREATE TABLE test (a TEXT, b TEXT, c TEXT);
INSERT INTO test VALUES ('one', 'two', 'three');
INSERT INTO test VALUES ('one', 'two', 'three');
INSERT INTO test VALUES ('one', 'two', 'three');

ALTER TABLE test -- which table to change
  ADD d TEXT DEFAULT 'test';
  -- new column to add: name and properties
  -- on the existing rows the value would be set to default or would be NULL otherwise.
```

## ID Columns

ID column hold the unique value for every row. The ID row is implementation dependant. In SQLite3 it is just a counter for every row.

Example:

```sql
CREATE TABLE test (
  id INTEGER PRIMARY KEY, -- Here we specify which row would by the ID
  a INTEGER,
  b INTEGER
);
```

## Filtering data

We can get the specific data with the usage of where clause.

```sql
SELECT Name, Continent, Population
  FROM Country
  WHERE
    Population <= 100000 OR
    Population IS NULL
  ORDER BY Population DESC;
-- possible boolean operators OR, AND

SELECT Name, Continent, Population
  FROM Country
  WHERE
    NAME LIKE '%isl_nd%'
    -- every name that has 'island' in it,
    -- here % works like *
    -- and _ is like ?
  ORDER BY Name DESC;

SELECT Name, Continent, Population
  FROM Country
  WHERE
    Continent IN ('Europe', 'Asia')
    -- Here IN operator works with lists, it is used in sub-selects
  ORDER BY Name DESC;
```

## Removing duplicates

To get only unique values we can use `SELECT DISTINCT`.

```sql
SELECT DISTINCT Continent FROM Country;
```

## Ordering output

We can sort the results of queries with the usage of `ORDER BY`.

Example:

```sql

SELECT Name FROM Country ORDER BY Name ASC;
-- orders in ascending order by name
SELECT Name FROM Country ORDER BY Name DESC;
-- orders in descending order by name
SELECT Name FROM Country ORDER BY Continent, Name;
-- orders in ascending order by continent and then name
SELECT Name FROM Country ORDER BY Continent DESC, Name ASC;
-- orders by continent in descending order and then name in ascending one.
```

## CASE expressions

We can use conditional logic with CASE statement when assigning the values to the columns or selecting.

Example:

```sql
DROP TABLE IF EXISTS bool_test;
CREATE TABLE bool_test (a INTEGER, b INTEGER);

INSERT INTO bool_test VALUES (1, 0);
INSERT INTO bool_test VALUES (0, 1);

SELECT
  CASE -- Here we define the case
    WHEN a -- so if a === true -> 'true' else 'false'
    THEN 'true' ELSE 'false' END
    as boolA, -- set the name as boolA
  CASE
    WHEN b
    THEN 'true' ELSE 'false' END
    AS boolB
  FROM bool_test; -- everything we get from bool_test table.

-- a different form of teh case
SELECT
  CASE a -- Here we define the case
    WHEN 1 -- so if a == 1 -> 'true' else 'false'
    THEN 'true' ELSE 'false' END
    as boolA, -- set the name as boolA
  CASE b
    WHEN 1 -- if b == 1
    THEN 'true' ELSE 'false' END
    AS boolB
  FROM bool_test; -- everything we get from bool_test table.
```
