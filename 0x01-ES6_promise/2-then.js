export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const rej = new Error();
  promise
    .then(() => {
      console.log('Got a response from the API');
      return res;
    })
    .catch(() => {
      console.log('Got a response from the API');
      return rej;
    })
    .then((result) => result);
}
