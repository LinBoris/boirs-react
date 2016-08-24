import expect from 'expect';
import contactHistoryReducer from '../../src/contactHistory/contactHistoryReducer';
import {getContactHistorySuccess} from '../../src/contactHistory/contactHistoryActions';

describe('contact history reducer', () => {
  it('initializes the current contact history state', () => {
    let result = contactHistoryReducer(undefined, {});

    expect(result).toEqual({contactRecords: []});
  });

  it('saves the contact records', () => {
    let result = contactHistoryReducer({}, getContactHistorySuccess(['contact', 'records']));

    expect(result.contactRecords).toEqual(['contact', 'records']);
  });
});
