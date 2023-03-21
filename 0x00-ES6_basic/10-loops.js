export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    // console.log(value);
    // const value = array[idx];
    // const idx = array.findIndex((val) => val === value);
    // console.log(idx)
    // array[idx] = appendString + value;
    newArray.push(appendString + value);
  }

  return newArray;
}
