/* eslint no-new-object: 'off' */

const assert = require('assert');
const obvl = require('../');

describe('OBVL', () => {
	let fallbackValue = { a: 1, b: 2, c: 3 };

	it('should return `value` when `value` is Object.', () => {
		let emptyObject = {};
		let objectInstance = new Object();

		assert.strictEqual(obvl(emptyObject, fallbackValue), emptyObject);
		assert.strictEqual(obvl(objectInstance, fallbackValue), objectInstance);
	});
	it('should return `fallbackValue` when `value` is not Object.', () => {
		assert.strictEqual(obvl(null, fallbackValue), fallbackValue);
		assert.strictEqual(obvl([1, 2, 3], fallbackValue), fallbackValue);
		assert.strictEqual(obvl(0, fallbackValue), fallbackValue);
		assert.strictEqual(obvl('string', fallbackValue), fallbackValue);
		assert.strictEqual(obvl(Symbol('symbol'), fallbackValue), fallbackValue);
	});
});
