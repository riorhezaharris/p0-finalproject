const mysql = require('mysql2/promise');

async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'p0finalproject',
  });
  return connection;
}

module.exports = getConnection;