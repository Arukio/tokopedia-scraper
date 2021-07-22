function getImages(data) {
	const media = data.pdpGetLayout.components.find(
		item => item.name === 'product_media',
	);
	const images = media.data[0].media.map(item => ({
		url: item.urlOriginal,
	}));

	return images;
}

function getProductInfo(data) {
	const productDetail = data.pdpGetLayout.components.find(
		item => item.name === 'product_content',
	);

	const {name} = productDetail.data[0];
	const price = productDetail.data[0].price.value;
	const stock = productDetail.data[0].stock.value;

	return {
		name,
		price,
		stock,
	};
}

function getDescription(data) {
	const productDetail = data.pdpGetLayout.components.find(
		item => item.name === 'product_detail',
	);

	const description = productDetail.data[0].content.find(
		item => item.title === 'Deskripsi',
	).subtitle;

	return description;
}

export function parseProductData(data) {
	const result = {};

	const porductInfo = getProductInfo(data);

	result.id = data.pdpGetLayout.basicInfo.id;
	result.description = getDescription(data);
	result.name = porductInfo.name;
	result.price = porductInfo.price;
	result.stock = porductInfo.stock;
	result.weight = data.pdpGetLayout.basicInfo.weight;
	result.weightUnit = data.pdpGetLayout.basicInfo.weightUnit;
	result.weightFormatted = `${result.weight} ${result.weightUnit}`;
	result.condition = data.pdpGetLayout.basicInfo.condition;
	result.url = data.pdpGetLayout.basicInfo.url;
	result.sku = data.pdpGetLayout.basicInfo.sku;
	result.stats = data.pdpGetLayout.basicInfo.stats;
	result.txStats = data.pdpGetLayout.basicInfo.txStats;

	result.images = getImages(data);

	return result;
}
