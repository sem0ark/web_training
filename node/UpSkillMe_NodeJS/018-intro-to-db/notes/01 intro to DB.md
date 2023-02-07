Notes on the course EPAM UpSkillMe Node.js - Introduction to Data Bases
Completed by Arkadii Semenov on 2023-02-07

## What are DB?

A large collections of data, organized especially for rapid search and retrieval.

_Standard concepts of databases_:

1. It comes with Database Management System (**DBMS**)
2. All data is organized into tables/collections
3. All inner data structures also organized with indexes for fast retrieval
4. All the data is contained on a Disk or Memory

_Architecture of the app_:

1. Application
2. It contains DB Client / API, which would use the **DBMS** to access the data

## Types of databases

#### Relational databases

Relational DB's have **static** schemas that define:

1. Tables
2. Table structure
3. Relations between records

Example:

- a student has one PoB (1:1)
- a college has many students (1:n)
- a subject has many students and a student has many subjects (m:n)

To model the relations and all data can be shown with **Entity Relationship Diagram** (ERD). Here in relational DB's you would need to define additional tables for all m:n relations, because you don't have anything like lists...
So the final structure should have only 1:1 and 1:n relations.

While modeling the database you would need to ask some philosophical questions like:

1. Is a hotel always in a village?
2. Should a trail be related to a hotel?
3. Can POI have many trails?

You would need to solve it upfront to understand the final structure of you DB.

During the work with the DB's you can make a lot of sifferent errors in the structure, so there are some recommendations called **Data Normalization**:

1. Factor out the repeating or non-related data.
2. In all tables should be as less repetitions as possible.
3. We also add relations of the data in DB, so if something is deleted everything strictly related to only it should be deleted as well.

Most relational DB's should satisfy **ACID** principles:

1. _Automacy_ - A transaction has to be "all or nothing".
2. _Consistency_ - A transaction has to transform the data from one valid state to another.
3. _Isolation_ - Concurrent transactions leave the data as if they were executed in sequence.
4. _Durability_ - Once a transaction has been committed it should be persistently stored.

Examples of relational DB's:

1. Open Source
   1. MySQL
   2. PostgreSQL
2. Commercial
   1. Oracle
   2. IBM Db2
   3. Microsoft SQL Server

Further Reading:

1. [What is a Database? Definition, Meaning, Types](https://www.guru99.com/introduction-to-database-sql.html)
2. [ACID Explained: Atomic, Consistent, Isolated & Durable](https://www.bmc.com/blogs/acid-atomic-consistent-isolated-durable/)
