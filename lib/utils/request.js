import fetch from 'node-fetch';

import {GQL_ENDPOINT} from '../constants/constants.js';
import {getCookie} from './cookie.js';

export async function request(options) {
	const cookie = await getCookie();

	const defaultHeaders = {
		'User-Agent': 'insomnia/2021.4.1',
		'content-type': 'application/json',
		cookie,
	};

	const response = await fetch(GQL_ENDPOINT, {
		headers: {...defaultHeaders, ...options.headers},
		method: options.method,
		body: options.body,
	});

	const data = await response.json();

	return data;
}
