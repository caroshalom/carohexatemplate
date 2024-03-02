import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			'@components': path.resolve('./src/lib/components'),
			'@data': path.resolve('./src/demo-data'),
			'@store': path.resolve('./src/lib/store'),
			'@apps': path.resolve('./src/lib/view/apps'),
			'@view': path.resolve('./src/lib/view')
		},
		prerender: {
			crawl: true
		}
	},
	preprocess: preprocess(),
};

export default config;

// //Setting up conection to PostgreSQL

// const pool = new Pool({
// 	user: '',
// 	host: '',
// 	database: '',
// 	password: '',
// 	port: 5432,
// });

// //SQL Query

// const query = 'SELECT * FROM nombre_de_la_tabla';

// //fetching data

// async function fetchData(){
// 	try {
// 		const client = await pool.connect();
// 		const result = await client.query(query);
// 		client.release();
// 		return result.rows;
		
// 	} catch (error) {
// 		console.error('Error fetchin data:', error);
// 		throw error;
// 	}
// }

// (async () => {
//     try {
//         const data = await fetchData();
//         console.log('Data from PostgreSQL:', data);
//         // Aquí puedes usar los datos en tu aplicación SvelteKit
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();