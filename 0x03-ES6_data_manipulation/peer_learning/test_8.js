export default function cleanSet (set, startString) {
	if (!startString || !set) {

		return ''
	}
	const aray = []
	set.forEach((values) => {
    	if (values.startsWith(startString)) {
        	let string = values.substring(startString.length) 
        	// console.log(string)
        	aray.push(string)
	}
	})
	return aray.join('-')
}

console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon'));
console.log(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), ''));
