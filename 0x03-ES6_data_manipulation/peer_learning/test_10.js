export default function updateUniqueItems(map) {
	if (!(map instanceof Map)) {
		throw new Error('Cannot process')
	}
	return map.forEach((value, key) => {
		console.log(key, value)
		if (value === 1) {
			map.set(key, 100)
		}
	})
}
import groceriesList from "./9-groceries_list.js";
const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
