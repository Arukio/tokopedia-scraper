import fetch from 'node-fetch';
import {getCookie} from './cookie.js';

export async function request(url, options_) {
	const cookie = await getCookie();

	const options = {
		headers: {
			'User-Agent': 'insomnia/2021.4.1',
			'content-type': 'application/json',
			cookie,
		},
		method: 'POST',
		...options_,
	};

	const response = await fetch(url, options);
	const data = await response.json();

	if (data.errors && data.errors.length > 1) {
		const {message} = data.errors[0];

		throw message;
	}

	return data.data;
}
