import test from 'ava';
import {product} from '../src/product.js';

test('should throw when product url is not valid', async t => {
	await t.throwsAsync(() => product());
	await t.throwsAsync(() => product(''));
});
