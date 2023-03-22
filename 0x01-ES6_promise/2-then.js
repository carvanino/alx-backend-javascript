export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const rej = new Error('');
  promise.then(() => { res || rej; })
    .then(() => { res || rej; })
    .then(() => { console.log('Got a response from the API'); });
}
