// src/schema/notifications.js
import { normalize, schema } from 'normalizr';
import * as notificationsData from '../../notifications.json';

// Define the user entity
const user = new schema.Entity('users');

// Define the message entity
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define the notification entity
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the notifications data
export const normalizedData = normalize(notificationsData.default, [notification]);

/**
 * Get all notifications for a specific user by ID.
 * @param {string} userId - The ID of the user.
 * @returns {Array} List of notifications for the user.
 */
export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications || {};
  const messages = normalizedData.entities.messages || {};

  return Object.values(notifications)
    .filter((notif) => notif.author === userId)
    .map((notif) => messages[notif.context]);
};
