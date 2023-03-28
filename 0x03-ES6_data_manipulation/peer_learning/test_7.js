export default function hasValuesFromArray (set, array) {
	return array.every(values => set.has(values))
}

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));


