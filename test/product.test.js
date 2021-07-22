import test from 'ava';
import {product} from '../lib/index.js';

test('should fail when url is not valid', async t => {
	await t.throwsAsync(product);
	await t.throwsAsync(() => product(''));
	await t.throwsAsync(() => product('hello world'));
});
