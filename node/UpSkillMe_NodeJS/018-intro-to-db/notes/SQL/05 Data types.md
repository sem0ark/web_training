Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

## Typing and TYPEOF function

You should consider the inner operations of conversion of some types to other. We can use TYPEOF function to see what is the type of the value.

```sql
SELECT TYPEOF(1 + 1); -- -> 'integer'
SELECT TYPEOF(1 + 1.0); -- -> 'real'
SELECT TYPEOF('panda'); -- -> 'string'
SELECT TYPEOF('panda' + 'panda'); -- -> 'string'
```

## Strings

STring in SQL - series of characters, but because they are widely used SQL and its implementation present the number of methods to use them.

NB! it is commonly used to place string in 'single quotes', but in MySQL "double quotes are used".

```sql
SELECT 'a literal SQL''s string';
-- add '' in to add a single colon

SELECT 'the' || ' string ' || 'concatenation';
-- varies from system to system

-- some basic functions for string processing
SELECT SUBSTR(string, start, ?length=LENGTH(string));
-- start counting from 1, length is optional
SELECT LENGTH(string); -- Get the length of a string

SELECT TRIM(string,  ?char=' ');   -- delete chars from right and left
SELECT RTRIM(string, ?char=' ');   -- delete chars from right
SELECT LTRIM(string, ?char=' ');   -- delete chars from left

SELECT UPPER(string);  -- convert letters to upper case
SELECT LOWER(string);  -- convert letters to lower case
```

Check the documentation for the system you are using for teh string functions.

Examples:

```sql
SELECT Name, LENGTH(Name) AS length
  FROM City
  ORDER BY length DESC;

SELECT Name, LENGTH(Name) AS length
  FROM City
  ORDER BY length DESC;

SELECT
    released, -- getting the data from the date like 1993-01-21
    SUBSTR(released, 1, 4) AS Year,
    SUBSTR(released, 6, 2) AS Month,
    SUBSTR(released, 9, 2) AS Day,
  FROM album
  ORDER By released;

-- it is usefu l when comparing the strings,
-- because of case sensitivity
-- NB! in SQLite works only for ASCII Characters
SELECT LOWER(Name) AS Name FROM City ORDER BY Name;
SELECT UPPER(Name) AS Name FROM City ORDER BY Name;

-- it is possible to define your own types of conversion
```

## Numeric types

Are entirely dependent on the system, so functions will differ too!
There are Integer and Real values, but we can consider categories:

1. Integer
   - `INTEGER(precision)` for whole numbers
   - `DECIMAL(precision, scale)` for fixed precision numbers
   - `MONEY(precision, scale)` for currency
2. Real - not precise
   - `REAL(precision)` for big float numbers
   - `FLOAT(precision)` for small float numbers

```sql
SELECT 1 / 2;   -- -> 0, uses integer division
SELECT 1.0 / 2; -- -> 0.5, uses real division
SELECT CAST(1 AS REAL) / 2; -- -> 0.5, uses real division
SELECT 17 / 5, 17 % 5; -- -> integer division and modulo operator

SELECT 2.55555; -- -> 2.55555
SELECT ROUND(2.55555); -- -> 3
SELECT ROUND(2.55555, 3); -- -> 2.556
SELECT ROUND(2.55555, 0); -- -> 3
```

## Date and time

It is useful for time stamps and can be usually printed in a standard format for SQL -> from most to least significant part: "YYYY-MM-DD HH:mm:ss". It is stored in UTC (Coordinated Universal Time) or string.

SQL doesn't state special types but there are some:

- DATE
- TIME
- DATETIME
- YEAR
- INTERVAL

Examples for SQLite3:

```sql
SELECT DATETIME('now'); -- -> current date and time in UTC
SELECT DATE('now'); -- current date

-- additional operations
SELECT DATETIME('now', '+1 day'); -- tomorrow UTC
SELECT DATETIME('now', '-1 day'); -- yesterday UTC
SELECT DATETIME('now', '+3 days');
SELECT DATETIME('now', '-1 month', '+1 day');
SELECT DATETIME('now', '+1 year');
SELECT DATETIME('now', '+3 hours', '+27 minutes', '-1 day', '+3 years');
-- we can add different shifts for date ans time
```

The functions differ from the implementation to implementation, so check the docs!
