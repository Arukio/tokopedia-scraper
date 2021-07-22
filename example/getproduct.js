import {product} from '../index.js';

async function main() {
	const data = await product('google.com');

	console.log(data);
}

main();

