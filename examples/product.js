import tokopedia from '../index.js';

async function main() {
	const data = await tokopedia.product({
		url: 'https://www.tokopedia.com/eaztrip/masker-sensi-mask-duckbill-face-mask-3ply-original-50pcs-earloop',
	});

	console.log(data);
}

main();

