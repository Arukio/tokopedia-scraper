export function buildGraphqlQuery(query, variables) {
	return JSON.stringify({
		query,
		variables,
	});
}
