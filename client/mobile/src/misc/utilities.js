import _ from 'lodash';

export const isObject = obj => _.isPlainObject(obj);

export const objectHash = (obj, recursive) =>
{
	if (obj === null || typeof obj !== "object")
		return obj;

	if (obj instanceof Map)
		obj = Object.fromEntries(obj);
	const hash = Object.keys(obj).sort().map(k => k + ':' + objectHash(obj[k], true)).join(',');
	return recursive ? '{' + hash + '}' : hash;
};
