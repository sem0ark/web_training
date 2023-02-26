module.exports = {
  database: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: '33306',
      user: 'root',
      password: "root",
      database: 'rps',
    },
    migrations: {
      tableName: '_knex_migrations',
    },
  },
  server: {
    port: 5010,
  },
};
