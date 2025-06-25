import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
  try {
    await client.connect();
    console.log('Conexão bem-sucedida!');
  } catch (err) {
    console.error('Erro ao conectar:', err);
  } finally {
    await client.end();
  }
}

testConnection();