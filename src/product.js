import {request} from './utils/request.js';

const GQL_TOKOPEDIA_URL = 'https://gql.tokopedia.com';

function buildQuery() {
	return JSON.stringify({
		query: 'query isAuthenticatedQuery { isAuthenticated}',
	});
}

export async function product(url) {
	if (!url || url === '') {
		throw new new Error('product url is missing')();
	}

	const options = {
		body: buildQuery(),
	};

	const result = await request(GQL_TOKOPEDIA_URL, options);

	return result;
}
