import {getContactHistory} from '../../src/contactHistory/contactHistoryActions';
import expect from 'expect';

describe('contact record action', () => {
  it('get all contact history records', () => {
    let dispatchSpy = expect.createSpy();
    let actualThenFn = () => {};
    let fakePromise = {
      then: function(f) {
        actualThenFn = f;
      }
    };
    let getJSONSpy = expect.createSpy().andReturn(fakePromise);
    let action = getContactHistory(9999, getJSONSpy);

    action(dispatchSpy);

    expect(getJSONSpy).toHaveBeenCalledWith('/9999/contact-records');
    actualThenFn({contactRecords: 999});
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'GET_CONTACT_HISTORY_SUCCESS',
      contactRecords: {contactRecords: 999}
    });
  });
});
