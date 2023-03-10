  
Links:

- [Previous](07%20Triggers%20Sub-selects%20and%20Views.md)

Tags: #notes/web/epam/upskillme #sci/pro/tech/db/sql/sqlite #sci/pro/tech/db/sql/mysql

Date: [20230213](../../../../../200%20Diary/205%20Day/20230213.md)
Time: 20:37:16
_____

Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
Completed by Arkadii Semenov on 2023-02-13

Used Software:

1. MySQL workbench for running mysql
2. Run mysql on Docker:
   - `docker pull mysql`
   - `docker run --name mysql -p 3406:3306 -e MYSQL_ROOT_PASSWORD=yourpassword -d mysql`
   - connect to the DB with mysql workbench

## Creating a schema for the DB

In MySQL we need to define the schema (structure of the DB) directly in the database, so we should use MySQL workbench for that.

1. click create a schema, apply
2. tables -> create a table
3. enter the fields and mark the flags needed for the table
4. hit apply

Connecting to Node.js:
`npm install mysql2`

## Sequelize

Sequelize is a DB abstraction layer and also ORM (object relational mapper) that can be used in Node.js and can connect to:

- MySQL
- SQLite
- PostgreSQL
- Microsoft SQL Server

Mostly it is working in the same way as `mongoose`.

```js
const Car = sequelize.define("Car", { make: Sequelize.String });

sequelize
  .sync() // synchronize the data with the DB, so teh operation can start
  .then(() =>
    Car.create({
      // add a new row into the Car
      make: "Ford",
    })
  )
  .then((myCar) => {
    console.log(myCar.get({ plain: true }));
    // log the data in case of success
  });
```

The only thing different from mongoose is transactions, because mongoose doesn't need it at all. In any way check the documentation.

Example:

```js
return sequelize.transaction((t) => {
  Car.create(
    {
      make: "Ford",
    },
    { transaction: t }
  ).then((myCar) => {
    myCar.setOwner(
      {
        firstname: "Daniel",
        lastname: "Jones",
      },
      { transaction: t }
    );
  });
});
```

Further reading:

1. [What is Normalization?](https://www.guru99.com/database-normalization.html)
