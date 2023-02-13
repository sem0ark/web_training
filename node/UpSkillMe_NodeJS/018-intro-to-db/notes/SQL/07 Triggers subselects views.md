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
