const isPlainObj = require('is-plain-obj');

module.exports = function obvl(value, fallbackValue) {
	return isPlainObj(value) ? value : fallbackValue;
};
