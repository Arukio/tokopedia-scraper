import R from 'ramda';

import {request} from './utils/request.js';
import {buildGraphqlQuery} from './utils/query.js';
import {PRODUCT_INFO_QUERY} from './utils/constants.js';
import {extractor} from './utils/extractor.js';
import {MAPPING} from './mappers/product.js';

const GQL_TOKOPEDIA_URL = 'https://gql.tokopedia.com';

export async function product(options_) {
	if (!options_.url || options_.url === '') {
		throw new new Error('product url is missing')();
	}

	const _url = new URL(options_.url);

	if (!_url.hostname.includes('tokopedia.com')) {
		throw new new Error('url is not valid')();
	}

	const path = _url.pathname.split('/');

	if (path.length < 2 || path.length > 3) {
		throw new new Error('url is not valid')();
	}

	const productKey = path[2];
	const shopDomain = path[1];

	const options = {
		body: buildGraphqlQuery(PRODUCT_INFO_QUERY,
			{
				apiVersion: 1,
				layoutID: '',
				productKey,
				shopDomain,
				userLocation: {},
			},
		),
		headers: {
			'x-device': 'mobile',
			'x-source': 'tokopedia-lite',
			'x-tkpd-akamai': 'pdpGetLayout',
			'x-tkpd-lite-service': 'atreus',
			'x-version': 'c177bac',
		},
	};

	const result = await request(GQL_TOKOPEDIA_URL, options);

	return R.pipe(extractor(MAPPING))(result);
}
