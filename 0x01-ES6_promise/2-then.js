export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const rej = new Error();
  return promise
    .then(() => res)
    .catch(() => rej)
    .finally(() => {
      console.log('Got a response from the API');
    });
}
