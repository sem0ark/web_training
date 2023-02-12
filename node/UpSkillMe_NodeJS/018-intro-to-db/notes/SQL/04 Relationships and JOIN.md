Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

## Understanding JOIN

`JOIN` clause SQL can quickly perform queries for related data from different tables. Usually some tables contain fields with ids of rows from other table with is usually called foreign key.

We can visualize the join as an intersection diagram:

1. INNER JOIN -> only (left and right) tables. The most usual, it returns the list of rows only where conditions met.
2. LEFT OUTER JOIN -> all left + intersection with right. All rows where the conditions are met + all left table rows.
3. RIGHT OUTER JOIN -> all right + intersection with left. All rows where the conditions are met + all right table rows. Rare.

## Accessing related tables

Example:

```sql
CREATE TABLE left (id INTEGER, description TEXT);
CREATE TABLE right (id INTEGER, description TEXT);
INSERT INTO left VALUES (1, 'left 01');
INSERT INTO left VALUES (2, 'left 02');
INSERT INTO left VALUES (3, 'left 03');
INSERT INTO left VALUES (4, 'left 04');
INSERT INTO left VALUES (5, 'left 05');
INSERT INTO left VALUES (3, 'right 03');
INSERT INTO left VALUES (4, 'right 04');
INSERT INTO left VALUES (5, 'right 05');
INSERT INTO left VALUES (6, 'right 06');
INSERT INTO left VALUES (7, 'right 07');
SELECT * FROM left;
SELECT * FROM right;

-- `INNER JOIN`
SELECT -- Here l.description means the description field from 'left'
    l.description as left, -- what to select from the tables + rename
    r.description as right,
  FROM left AS l  -- what to consider left table as on the diagram
  JOIN right AS r -- `right table` with what to join
    ON l.id = r.id; -- the condition for joining
    -- so get all the rows where the ids are the same

-- `LEFT OUTER JOIN`
SELECT
  -- Here l.description means the description field from 'left' table
    l.description as left, -- what to select from the tables + rename
    r.description as right,
  FROM left AS l  -- what to consider left table as on the diagram
  LEFT JOIN right AS r -- `right table` with what to join
    ON l.id = r.id; -- the condition for joining
-- so get all the rows where the ids are the same
--      + all other rows from left
-- where the condition doesn't match right row would be NULL

DROP TABLE IF EXISTS left;
DROP TABLE IF EXISTS right;
```

## m:n or many to many relationship

Usually when we have that type of the situation we would have to use junction table, which contains the relation between two other tables.

In that way we would have to use multiple JOIN operations.

Example:

```sql
SELECT
    c.name AS Customer,
    c.zip,
    i.name AS Item,
    i.description,
    s.quantity AS Quantity,
    s.price AS Price
  FROM sale AS s -- the junction table between item and customer
  JOIN item AS i -- get all the rows from i intersecting with s
    ON s.item_id = i.id
  JOIN customer AS c -- get all the rows from c intersecting with s
    ON s.customer_id = c.id
  ORDER BY Customer, Item;

-- because we use inner joining
-- we should bother about the order of operations

-- if we need to, for example, show all the customers

SELECT
    c.name AS Customer,
    c.zip,
    i.name AS Item,
    i.description,
    s.quantity AS Quantity,
    s.price AS Price
  FROM customer AS c
  LEFT JOIN sale AS s ON s.customer_id = c.id
  LEFT JOIN item AS i ON s.item_id = i.id
  ORDER BY Customer, Item;
-- Here we've used LEFT JOIN, so the customer rows would stay,
-- maybe with NULL's
```
