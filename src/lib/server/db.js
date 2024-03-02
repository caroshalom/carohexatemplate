import { Pool } from 'pg';

export async function retrieveData() {
	try {
		const pool = new Pool({
			user: 'caro',
			host: 'localhost',
			database: 'bdTest',
			password: 'password7',
			port: 5432
		});
		const result = await pool.query('SELECT * FROM tb_users');
		console.log('Query executed ok');
		return result.rows;
	} catch (error) {
		console.error('error occurred while retrieving data from the database:', error);
		throw error;
	}
}