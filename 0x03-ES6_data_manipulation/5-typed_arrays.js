export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= length) {
    throw new Error('Posiiton outside range');
  }
  view.setInt8(position, value);
  // const typedArray = new Int8Array(buffer)
  // typedArray[position] = value
  return view;
}
