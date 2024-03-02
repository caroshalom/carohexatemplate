import { retrieveData } from '$lib/server/db'; 

export async function load() {
	try {
		const results = await retrieveData();
		console.log(results);
		return {
			results: results
		};
	} catch (error) {
		return {
			error: error
		};
	}
}