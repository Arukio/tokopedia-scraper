import {request} from '../utils/request.js';

import {buildQuery} from '../utils/query.js';
import {parseProductData} from '../parser/product.js';
import {PRODUCT_INFO_QUERY} from '../constants/query/product-info.js';

function parseProductUrl(urlString) {
	const url = new URL(urlString);

	const path = url.pathname.split('/');

	return {domain: path[1], productKey: path[2]};
}

// Product detail
export async function product(url) {
	if (!url || url === '') {
		throw new Error('product url is missing');
	}

	const {domain, productKey} = parseProductUrl(url);

	const data = {
		apiVersion: 1,
		layoutID: '',
		productKey,
		shopDomain: domain,
		userLocation: {},
	};

	const options = {
		method: 'POST',
		headers: {
			'x-device': 'mobile',
			'x-source': 'tokopedia-lite',
			'x-tkpd-akamai': 'pdpGetLayout',
			'x-tkpd-lite-service': 'atreus',
			'x-version': 'c177bac',
		},
		body: buildQuery(PRODUCT_INFO_QUERY, data),
	};

	const result = await request(options);

	return parseProductData(result.data);
}
