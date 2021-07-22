import R from 'ramda';

export function extractor(mappings) {
	return function (data) {
		return R.map(spec => {
			if (R.is(Array, spec)) {
				return R.path(spec, data);
			}

			const input = R.path(spec.path, data);

			return spec.fun(input, data);
		}, mappings);
	};
}
