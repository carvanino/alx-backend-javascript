export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const newStr = [];
  set.forEach((values) => {
    if (typeof values === 'string' && values.startsWith(startString)) {
      const string = values.substring(startString.length);
      if (string) {
        newStr.push(string);
      }
    }
  });
  return newStr.join('-');
}
