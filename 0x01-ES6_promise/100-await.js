import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const obj = {};
    const upload = uploadPhoto();
    const create = createUser();
    const [photo, user] = await Promise.all([upload, create]);
    obj.photo = photo;
    obj.user = user;

    return obj;
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
