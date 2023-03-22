import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const arr = [];
      for (const value of values) {
        const obj = {};
        obj.status = value.status;
        if (value.value === undefined) {
          obj.value = value.reason;
        } else {
          obj.value = value.value;
        }
        arr.push(obj);
      }
      return arr
    });
}
