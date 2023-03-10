  
Links:

- [Previous](01%20Introduction%20to%20SQL.md)
- [Next](03%20Managing%20Databases.md)

Tags: #notes/web/epam/upskillme #sci/pro/tech/db/sql

Date: [20230217](../../../../../200%20Diary/205%20Day/20230217.md)
Time: 20:31:59
_____

Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

## SELECT, selecting rows and columns

We can use select with where clause to get specific data from the DB:

Example:

```sql
SELECT * -- would work as getting _all_ columns from the table.
FROM Country;

SELECT Name as Country, Continent, Region -- What to show (which columns to show)
  -- select NAME as Something would work as a rename from the table
  -- by changing the order of columns we would change the output order
  FROM Country                 -- search where
  WHERE Continent = 'Europe';  -- with what condition
  ORDER BY Name Asc            -- Sort values by the name in ascending order
  LIMIT 5                      -- Get the first five rows from data
  OFFSET 10;                   -- Skip 10 first rows

SELECT COUNT(*)
  -- count existing data, instead of just selecting it
  -- if we typed something that hasn't data, we would get different number
  -- So usually we use COUNT(*).
FROM Country
WHERE
  Population > 10000000
  AND Continent = "Europe";
```

## INSERT, add data to the table

We can use `INSERT` to enter some new data into the table.

Example:

```sql
INSERT INTO customer -- inset into which table
  (name, address, state, zip) -- into which columns
  VALUES -- which data in the same order
    ('Some Name', 'Some street 123', 'CA', '91234');

INSERT INTO
  customer
  (name, address, state, zip, city)
  VALUES ('Some Other Name', 'Some street 1213', 'CA', '91234', 'Bedrock');
```

## UPDATE, update data in the table

We can use `UPDATE` to enter some new data into the table by using where clause to specify the places to update.

Example:

```sql

UPDATE customer -- update data in which table
  SET           -- which data should be set and into which columns
    address = '123 some street',
    zip = '98023'
  WHERE
    id = 5;     -- the condition that should satisfy

UPDATE customer -- update data in which table
  SET           -- which data should be set and into which columns
    address = NULL, -- we can even delete tha data
    zip = NULL      -- NULL in the table means empty
  WHERE
    id = 5;     -- the condition that should satisfy
```

## DELETE, deleting rows from the table

We can use `DELETE` to remove some rows from the table by using where clause to specify the places.

Example:

```sql

DELETE FROM customer -- from which table to delete from
  WHERE     -- in case we don't specify
            -- the condition we would delete all rows
    id = 4; -- the condition that should satisfy
```
