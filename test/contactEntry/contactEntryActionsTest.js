import expect from 'expect';
import {createRecord} from '../../src/contactEntry/contactEntryActions';

describe('contactEntry', () => {
  it('creates one record for a customer', () => {
    let fetchSpy = expect.createSpy();
    let action = createRecord(1234, {memo: 'some memo'}, fetchSpy);

    action();

    expect(fetchSpy).toHaveBeenCalledWith(
      '/1234/contact-records',
      {memo: 'some memo'}
    );
  });
});
