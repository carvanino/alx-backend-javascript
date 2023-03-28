export default function cleanSet(set, startString) {
  if (!startString || !set) {
    return '';
  }
  const newStr = [];
  set.forEach((values) => {
    if (values.startsWith(startString)) {
      const string = values.substring(startString.length);
      if (string) {
      	newStr.push(string);
      }
    }
  });
  return newStr.join('-');
}
