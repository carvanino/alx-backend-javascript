export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const rej = new Error('API request failed');
  promise
    .then(() => {
      console.log('Got a response from the API');
      return res;
    })
    .catch((error) => {
      console.error('API request failed:', error);
      return rej;
    })
    .then((result) => {
      // this will only execute if the Promise resolved successfully
      return result;
    });
}
