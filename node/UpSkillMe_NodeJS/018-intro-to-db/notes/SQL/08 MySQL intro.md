Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-13

Used Software:

1. MySQL workbench for running mysql
2. Run mysql on Docker:
   - `docker pull mysql`
   - `docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=yourpassword -d mysql`
   - connect to the DB with mysql workbench

## Creating a schema for teh DB

In MySQL we need to define the schema (structure of the DB) directly in the database, so we should use MySQL workbench for that.

1. click create a schema, apply
2. tables -> create a table
3. enter the fields and mark the flags needed for the table
4. hit apply

## Connecting to Node.js

1. npm install mysql2

Further reading:

1. [What is Normalization?](https://www.guru99.com/database-normalization.html)
