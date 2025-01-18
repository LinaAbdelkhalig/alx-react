import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils functions', () => {
  // Test for getFullYear
  test('getFullYear returns the correct year', () => {
    // Store the current year to avoid creating a time bomb
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  // Test for getFooterCopy
  test('getFooterCopy returns correct string when argument is true', () => {
    expect(getFooterCopy(true)).toBe('ALX');
  });

  test('getFooterCopy returns correct string when argument is false', () => {
    expect(getFooterCopy(false)).toBe('ALX main dashboard');
  });

  // Test for getLatestNotification
  test('getLatestNotification returns correct string', () => {
    const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toBe(expectedNotification);
  });
});
