Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-12

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
