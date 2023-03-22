export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const rej = { error: '' };
  promise.then((res, rej) => { res || rej; })
    .then((res, rej) => { res || rej; })
    .then((res, rej) => { console.log('Got a response from the API'); });
}
