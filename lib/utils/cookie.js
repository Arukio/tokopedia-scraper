import fetch from 'node-fetch';

import {GQL_ENDPOINT} from '../constants/constants.js';

let cookie;

function parseCookies(response) {
	const raw = response.headers.raw()['set-cookie'];
	return raw.map(entry => {
		const parts = entry.split(';');
		const cookiePart = parts[0];
		return cookiePart;
	}).join(';');
}

async function fetchCookie() {
	const response = await fetch(GQL_ENDPOINT, {
		headers: {
			accept: '*/*',
			'User-Agent': 'insomnia/2021.4.1',
			'content-type': 'application/json',
		},
	});

	return parseCookies(response);
}

export async function getCookie() {
	if (!cookie) {
		cookie = await fetchCookie();
	}

	return cookie;
}
