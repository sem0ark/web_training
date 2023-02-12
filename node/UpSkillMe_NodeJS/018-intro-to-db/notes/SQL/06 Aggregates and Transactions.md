Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

Do you know what to call the type of data when you derive information from more than one row at a time?
If your answer is "no," don't worry, this is aggregated data. And in this section, you will learn all about aggregates! SQL has powerful features to deal with aggregate data.

And what will happen if you want your aggregate functions to operate on distinct values? SQL provides the DISTINCT keyword to be used in aggregate functions.

## What are aggregates?

Aggregate function is function that can receive multiple values. Aggregate operators use and work with aggregated data.

For example, COUNT function returns the number of rows.

There are also:

- COUNT
- MIN
- MAX
- AVG
- SUM

Examples:

```sql
SELECT COUNT(*) FROM Country; -- -> get the number of countries

SELECT
    Region,
    COUNT(*) AS Count
    -- Here count works differently,
    -- we first group the rows into aggregates
    -- and only then count them!
  FROM Country
  GROUP BY Region -- create the aggregates based on the region
  ORDER BY Count DESC, Region;

SELECT a.title AS Album, COUNT(t.track_number) AS Tracks
  FROM track as t
  JOIN album as a
    ON a.id = t.album_id -- join the tracks and albums
  WHERE a.artist = 'The Beatles' -- filtering non aggregated data
  GROUP BY a.id -- get aggregates by album
  HAVING Tracks >= 10; -- should be after group by
  -- Here we can see the WHERE clause for aggregate data
  -- because we may need to use where for other reasons
  ORDER BY Tracks DESC, Album;

SELECT COUNT(*) FROM Country;
SELECT AVG(Population) FROM Country;
SELECT MIN(Population) FROM Country;
SELECT MAX(Population) FROM Country;
SELECT SUM(Population) FROM Country;

SELECT COUNT(DISTINCT HeadOfState) FROM Country;
-- by using distinct we use every value only once to avoid repetitions
```

## What are Transactions?

Transaction - group of operations that held as a one unit of work.

If one of teh operations fail, then the entire transaction is considered failed, so the DB restores the state before te transaction.
It is used to create a more stable and rigid state. Also transactions are used for concurrent operations, so every transaction is treated separately from others.

1000 inserts without transaction -> ~ 1 second
1000 inserts with transaction -> ~ 0.048 seconds -> much faster

```sql
BEGIN TRANSACTION;
-- starting the transaction
INSERT INTO widgetSales (inv_id, quan, price) VALUES (1, 5, 500);
UPDATE widgetInventory SET onhand = (onhand - 5) WHERE id=1;
-- finishing the transaction
END TRANSACTION;

BEGIN TRANSACTION;
UPDATE widgetInventory SET onhand = (onhand - 5) WHERE id=1;
ROLLBACK; -- abort the transaction
```

> Further reading:
>
> 1. [ACID Properties of Transactions](https://www.ibm.com/docs/en/cics-ts/5.4?topic=processing-acid-properties-transactions)
