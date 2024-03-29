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
  players: {
    host: 'localhost',
    port: 5010,
    protocol: 'http',
  },
  games: {
    host: 'localhost',
    port: 5005,
    protocol: 'http',
  },
  server: {
    port: 5000,
  },
  session: {
    secret: 'darth jarjar',
  },
};
