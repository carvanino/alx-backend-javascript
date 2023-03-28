export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  const newStr = [];
  set.forEach((values) => {
    if (values.startsWith(startString)) {
      const string = values.substring(startString.length);
      newStr.push(string);
    }
  });
  return newStr.join('-');
}
