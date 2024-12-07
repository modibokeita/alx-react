import { schema } from 'normalizr';

export const course = new schema.Entity('courses');
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};
