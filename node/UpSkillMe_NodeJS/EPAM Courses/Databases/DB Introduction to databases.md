
Links:
- [02 Introduction to MongoDB](../NodeJS_UpSkillMe/Databases/01%20MongoDB%20and%20Mongoose/02%20Introduction%20to%20MongoDB.md)
- [01 Introduction to Redis](../NodeJS_UpSkillMe/Databases/02%20Redis/01%20Introduction%20to%20Redis.md)
- [01 Introduction to SQL](../NodeJS_UpSkillMe/Databases/03%20MySQL%20and%20SQLite3/01%20Introduction%20to%20SQL.md)



Tags: #sci/pro/tech/db #notes/web/epam/upskillme 

Date: 2022-11-03
Time: 15:50:30
____


Types of databases:
>[!info]- Relational database
> The data is stored in tables, some of which are related to each other.
> Each row in the table is a record with a unique ID called the key.
> The columns of the table hold attributes of the data, and each record usually has a value for each attribute.

>[!info]- Object-oriented database
> Information in an object-oriented database is represented in the form of objects, as in object-oriented programming.

>[!info]- Distributed database
> A distributed database consists of several files located in different sites. The database may be stored on multiple servers, located in the same physical location, or distributed over different networks.

>[!info]- Data warehouse
> A data warehouse is a type of database designed for fast query and analysis.

A NoSQL database does not use the relational model and does not use SQL for a database query. NoSQL is a very broad term. There are many types of NoSQL databases:
>[!i]- Graph database
> Databases use a graphical model to store and represent data.
> Unlike other databases, relationships take priority in graph databases.
> The common use cases of graph databases are:
> - fraud detection
> - real-time recommendation engines
> - network and IT operations

>[!i]- Key-value database
> They are databases that use a simple key/value method to store data.
> This is quite a simple method of storing data.
> It is known to scale well. A phone dictionary is a classic example of a key-value database.

>[!i]- Document store database
> Document store database uses a document-oriented model to store data. It is like a key-value database, but the values are usually XML or JSON (both are structured text files storing data).

>[!i]- Column store database
> A column store database is similar to a relational database in that it has tables, rows, and columns, but the number of columns for each row is not fixed. Each row can have its own fields.


Most used type of databases is a *relational database*.
Virtually all relational databases use *structured query language (SQL)* for writing and querying data.

A relational database provides the most reliable way to access structured information. Click [here](https://database.guide/what-is-acid-in-databases/) to read about the ACID test used to check the reliability of databases.

Among relational databases, the most popular relational database management systems are:
- Oracle database
- MySQL
- Microsoft SQL Server
- PostgreSQL

## SQL
SQL stands for Structured Query Language. It is the language that you use to interact with a relational database.

The SQL commands INSERT, SELECT, UPDATE, and DELETE corresponds to the four basic principles of persistent storage: create, read, update, and delete (CRUD), respectively.

>[!note]- List of columns
> - *SELECT* – retrieves the data from a database,
> - *UPDATE* – updates the data in a database,
> - *DELETE* – deletes the data from a database,
> - *INSERT INTO (or INSERT)* – inserts new data into a database,
> - *ORDER BY ASC/DESC* – sorts the data in ascending or descending order,
> - *CREATE TABLE* – creates a new table,
> - *ALTER TABLE* – modifies a table,
> - *DROP TABLE* – deletes a table,
> - *JOIN* – combines rows from two or more tables, based on a related column, ![Pasted image 20221103160703](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103160703.png)
> - *FROM* – a clause used to list the tables and any joins required for the SQL statement,
> - *WHERE* – a clause used to specify a condition while fetching the data from a single table or by joining with multiple tables.

Example of SQL query:
![Pasted image 20221103160835](../../../300%20Utils/305%20Attachments/Pasted%20image%2020221103160835.png)

We can practice SQL with application like DBeaver.

#### Further reading
1.  To learn more about SQL, study the [SQL Tutorial](https://www.techonthenet.com/sql/) on www.techonthenet.com website.
2.  Click [here](https://dbeaver.io/) to find more details about DBeaver, a free SQL client software and a database management tool.
