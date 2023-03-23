import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const results = [];
      for (const value of values) {
        const result = {
          status: value.status,
          value: value.status === 'fulfilled' ? value.value : String(value.reason),
        };
        results.push(result);
      }
      return results;
    });
}
