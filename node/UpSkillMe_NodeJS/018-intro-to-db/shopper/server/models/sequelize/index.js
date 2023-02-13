// Notes on the course EPAM UpSkillMe Node.js - Introduction to Databases
// Completed by Arkadii Semenov on 2023-02-13

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // define the tables
  const Order = sequelize.define("Order", {
    userId: DataTypes.STRING(24), // insert the max length
    email: DataTypes.STRING,
    status: DataTypes.STRING,
  });

  const OrderItem = sequelize.define("OrderItem", {
    sku: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
  });

  Order.hasMany(OrderItem);
  OrderItem.belongsTo(Order, {
    onDelete: "CASCADE",
    // a trigger, if order is deleted, all order items are also deleted
    foreignKey: {
      allowNull: false,
    },
  });

  sequelize.sync();
  // "committing" the applied changes

  // Here we create the schema, so the data is written to the database
};