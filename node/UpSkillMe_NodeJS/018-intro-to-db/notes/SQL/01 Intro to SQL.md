Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-09

Ideas about that course:

1. In the course used SQLite 3
2. Every DB systems different
3. The course covers standard SQL

Used Software:

1. SQLite Studio for running and manipulation DB's

### SQL Overview

SQL - operate and managed the relational DB

1. Statement - unit of execution.
2. Clause - conditions of execution.
3. All operation come to four types, CRUD:
   - Create
   - Read
   - Update
   - Delete

Example:

```sql
SELECT *           -- statement that work as a return statement
  FROM Countries   -- form clause-specifies which table in the db to use
  WHERE            -- where clause -> requires an statement, works as conditions
    Continent = 'Europe';

INSERT                   -- works for writing (adding) data to the table
   INTO Customer         -- into which table the data should be inserted
      (name, city state) -- to which columns insert the data
   VALUES                -- specifies what to insert
      ('Jimi Hendrix', 'Renton', 'WA'); -- the values to insert

UPDATE Customer          -- works for changing information
   SET                   -- clause to which values to set
      Address = '123 wa' -- which value to which column we need to set
      Zip = '98056'
   WHERE id = 5;         -- conditions for updating

DELETE            -- Used for removing data
   FROM Customer  -- from what table we need to remove rows
   WHERE id = 4;  -- which rows we should remove
```

### Structure

1. All relational DBs organized into 2d grid of values called _tables_.
2. Every table consists of _records/rows_ and _fields/columns_.
3. Every row must have a _primary key_, which is aka unique ID.
4. Fields can have only a specified type of values.
5. The key in other fields or _foreign keys_ are used for relating data from different rows in other tables.

Further reading:

1.  [What is a Relational Database Management System?](https://www.codecademy.com/articles/what-is-rdbms-sql)
2.
