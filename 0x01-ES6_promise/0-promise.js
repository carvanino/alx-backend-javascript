export default function getResponseFromAPI() {
  const promiseObject = new Promise((resolve) => {
    resolve('resolved');
  });

  return promiseObject;
}
