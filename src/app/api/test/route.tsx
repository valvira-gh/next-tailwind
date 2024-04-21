import { Pool } from "pg";
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "nextdb",
  password: "vilikissa456",
  port: 5432,
});

export async function GET(request: Request) {
  try {
    const res = await pool.query(`SELECT * FROM Users;`);
    return res.rows;
  } catch (err) {
    throw new Error("Failed to fetch data from database");
  }
}
