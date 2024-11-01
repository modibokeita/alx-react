// task_3/dashboard/src/utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility functions tests', () => {
  test('getFullYear returns the current year', () => {
    const year = new Date().getFullYear();
    expect(getFullYear()).toBe(year);
  });

  test('getFooterCopy returns "Holberton School" when true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  test('getFooterCopy returns "Holberton School main dashboard" when false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  test('getLatestNotification returns the correct notification message', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
