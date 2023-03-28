export default function createInt8TypedArray(length, position, value) {
	const buffer = new ArrayBuffer(length)
	const view = new DataView(buffer)
	view.setInt8(position, value)
	return view
	//const typedArray = new Int8Array(buffer)
	//typedArray[position] = value
	//return buffer
}


console.log(createInt8TypedArray(10, 2, 89));
