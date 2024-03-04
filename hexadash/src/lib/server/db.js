import { Pool } from 'pg';
import { env } from '$env/dynamic/private';

//Database connection
const pool = new Pool({
	user: env.DB_USER,
	host: env.DB_HOST,
	database: env.DB_NAME,
	password: env.DB_PASSWORD,
	port: env.DB_PORT || 5432
});

export async function retrieveData() {
	try {
		const client = await pool.connect();
		try {
			const result = await client.query('SELECT * FROM tb_users');
			console.log('Query executed ok');
			return result.rows;
		} finally {
			// Release the client back to the pool after the query
			client.release();
		}
	} catch (error) {
		console.error('error occurred while retrieving data from the database:', error);
		throw new Error('Error connecting to database server');
	}
}