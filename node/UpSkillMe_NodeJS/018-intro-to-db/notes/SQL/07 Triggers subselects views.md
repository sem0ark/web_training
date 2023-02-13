Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

## Triggers

Operations that are automatically performed when some specified event occurs. Every system has its own syntax.

It is a good way to enforce some business rules into the DB.
They can be also used to prevent any changes to some tables to ensure the security.

Example:

```sql
CREATE TRIGGER newWidgetSale AFTER INSERT ON widgetSale
-- After what event the trigger should start working
BEGIN -- the start of trigger execution code
  -- here we update the table of customers
  --  so the last completed sale would be specified in the
  --  field of the last sale in the customer table
  UPDATE widgetCustomer
    SET last_order_id = NEW.id
    WHERE widgetCustomer.id = NEW.customer_id;
END; -- the end of the code
-- NEW - virtual row where the event happened
--    so here we can use it to update other parts of the DB


-- example of preventing any changes
-- NB! ex: MySQL doesn't even have such functionality
CREATE TRIGGER updateWidgetSale BEFORE UPDATE ON widgetSale
BEGIN
  SELECT
    RAISE(      -- throw analog in SQL
      ROLLBACK, -- what to do on raise
      'cannot update table "widgetSale"'
      -- what to show as a message
    )
    FROM widgetSale
    WHERE id = NEW.id AND reconciled = 1;
    -- because we use where we would raise the exception
    -- only if the user tries to update the reconciled sale
END;

-- creating timestamps and logging with triggers
CREATE TABLE stampSale AFTER INSERT ON widgetSale
BEGIN
  -- Here we a bunch of actions in the single trigger
  UPDATE widgetSale -- updating the sales table
    SET stamp = DATETIME('now') WHERE id=NEW.id;

  UPDATE widgetCustomer -- updating the customer table
    SET last_order_id = NEW.id, stamp = DATETIME('now');

  UPDATE widgetLog -- log the action into another database
    (stamp, event, username, tablename, table_id)
    VALUES
      (DATETIME('now'), 'INSERT', 'TRIGGER', 'widgetSale', NEW.id);
END;

-- restore the changes
DROP TRIGGER IF EXISTS newWidgetSale;
DROP TRIGGER IF EXISTS stampSale;
DROP TRIGGER IF EXISTS updateWidgetSale;
```

Here we can see that the triggers are stored with the table in SQLite3.

## Sub-selects

It is actually a nested group of `select` statements, because the result of every `select` is a table we can use it for another select.

It is a good way to store the data organized and not add additional changes to the DB after any checks.

So, it is working in the same way as functions in e.g. MatLab.

Example:

```sql
CREATE TABLE t (a TEXT, b TEXT);
INSERT INTO t VALUES ('NY0123', 'US4567');
INSERT INTO t VALUES ('AZ1231', 'GB1234');
INSERT INTO t VALUES ('CA1231', 'FR2312');

SELECT -- here is the standard select
    SUBSTR(a, 1, 2) AS State,
    SUBSTR(a, 3) AS SCode,
    SUBSTR(b, 1, 2) AS Country,
    SUBSTR(b, 3) AS CCode
  FROM t;

SELECT co.Name, ss.CCode -- (3) print the result
  FROM (
    SELECT -- here is the standard select
      SUBSTR(a, 1, 2) AS State,
      SUBSTR(a, 3) AS SCode,
      SUBSTR(b, 1, 2) AS Country,
      SUBSTR(b, 3) AS CCode
    FROM t
    -- (1) we get a table of code and code names
  ) AS ss
  JOIN Country AS co
    -- (2) then we join the result of (1)
    ON co.Code2 = ss.Country;
    -- with the country table

-- A couple of practical examples
SELECT * FROM album WHERE id IN
  -- print the info about all albums
  -- which contain a track with the duration is less than 90
  (SELECT DISTINCT album_id FROM track WHERE duration <= 90);

SELECT
  -- print all the information on tracks and albums which contain
  -- a track with the duration <= 90 seconds
    a.title AS album,
    t.track_number AS seq,
    t.title,
    t.duration, AS secs
  FROM album AS a
  JOIN track AS t ON t.album_id = a.id
  WHERE a.id IN
    (SELECT DISTINCT album_id FROM track WHERE duration <= 90)
  ORDER BY a.title, t.track_number;

SELECT
  -- print all the information on tracks <= 90 seconds
    a.title AS album,
    t.track_number AS seq,
    t.title,
    t.duration, AS secs
  FROM album AS a
  JOIN (
    -- here we can see that we perform the sub-select only once
    -- and use it as a data source
    -- which is much faster
    SELECT DISTINCT album_id, track_number, duration, title
    FROM track
    WHERE duration <= 90
  ) AS t
  ON t.album_id = a.id
  ORDER BY a.title, t.track_number;
```
