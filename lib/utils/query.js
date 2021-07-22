export function buildQuery(query, variables) {
	return JSON.stringify({
		query,
		variables,
	});
}
