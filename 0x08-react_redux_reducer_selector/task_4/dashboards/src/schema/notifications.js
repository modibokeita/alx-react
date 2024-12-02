import { schema } from 'normalizr';

export const notification = new schema.Entity('notifications');
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};
