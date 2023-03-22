export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const rej = { error: '' };
  promise.then(() => {return res})
    .catch(() => (Error ('')))
    .then(() => { console.log('Got a response from the API') })
}
