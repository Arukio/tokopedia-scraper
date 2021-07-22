import R from 'ramda';

function extractCategory(input) {
	return {
		...R.pick(['name'], input),
		parent: R.pluck('name')(input.detail),
	};
}

const _MAPPING = {
	id: ['basicInfo', 'id'],
	name: ['components', 4, 'data', 0, 'name'],
	price: ['components', 4, 'data', 0, 'price', 'value'],
	weight: ['basicInfo', 'weight'],
	url: ['basicInfo', 'url'],
	sku: ['basicInfo', 'sku'],
	stock: ['components', 4, 'data', 0, 'stock', 'value'],
	category: {
		path: ['basicInfo', 'category'],
		fun: extractCategory,
	},
	productImages: {
		path: ['components', 1, 'data', 0],
		fun: input => R.pluck('urlOriginal', input.media),
	},
	productVideos: {
		path: ['components', 1, 'data', 0],
		fun: input => R.pluck('urlOriginal', input.videos),
	},
	description: ['components', 21, 'data', '0', 'content', '5', 'subtitle'],
};

const basePath = 'pdpGetLayout';

export const MAPPING = R.map(spec => {
	if (R.is(Array, spec)) {
		return R.prepend(basePath, spec);
	}

	return {...spec, path: R.prepend(basePath, spec.path)};
}, _MAPPING);

