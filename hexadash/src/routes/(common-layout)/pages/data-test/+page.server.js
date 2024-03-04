import { retrieveData } from '$lib/server/db';

export async function load() {
	try {
		const results = await retrieveData();
		console.log(results);
		return {
			results: results
		};
	} catch (error) {
		console.error('Failed to load data:', error);
		return {
			status: 500,
			error: new Error('Could not load data')
		};
	}
}