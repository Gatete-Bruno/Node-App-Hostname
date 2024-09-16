import express from 'express';
import pkg from 'pg';
import os from 'os';

const { Client } = pkg; // Import Client from pg module
const app = express();
const port = 3000;

// PostgreSQL connection string from environment variable
const connectionString = process.env.POSTGRES_URI || 'postgres://postgres:password@postgres:5432/api_db';

async function getDbClient() {
  const client = new Client({
    connectionString: connectionString,
  });
  await client.connect();
  return client;
}

// Initialize database table if it doesn't exist
(async () => {
  const client = await getDbClient();
  await client.query(`
    CREATE TABLE IF NOT EXISTS hits (
      id SERIAL PRIMARY KEY,
      count INT
    );
  `);
  const res = await client.query('SELECT * FROM hits LIMIT 1');
  if (res.rows.length === 0) {
    await client.query('INSERT INTO hits (count) VALUES (0)');
  }
  client.end();
})();

app.get('/', async (req, res) => {
  const client = await getDbClient();

  // Fetch current hit count
  const result = await client.query('SELECT count FROM hits LIMIT 1');
  const newCount = result.rows[0].count + 1;

  // Update hit count
  await client.query('UPDATE hits SET count = $1 WHERE id = 1', [newCount]);

  res.json({
    hits: newCount,
    hostName: os.hostname(),
    success: true,
  });

  client.end();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
