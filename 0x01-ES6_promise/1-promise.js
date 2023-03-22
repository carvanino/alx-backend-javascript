export default function getFullResponseFromAPI(success) {
  const promiseObject = new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working correctly'));
    }
  });
  return promiseObject;
}
