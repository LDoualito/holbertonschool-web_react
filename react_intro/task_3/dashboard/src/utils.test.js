import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  it('correct output', () => {
    expect(getFullYear()).toEqual(2023);
  });
});

describe('getFooterCopy function', () => {
  it('correct output with isIndex === true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  it('correct output with isIndex === false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  })
});

describe('getLatestNotification function', () => {
  it('correct output', () => {
    expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
  });
});
