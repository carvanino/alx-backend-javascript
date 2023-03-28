export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return map.forEach((key, value) => {
    if (key === 1) {
      map.set(value, 100);
    }
  });
}
