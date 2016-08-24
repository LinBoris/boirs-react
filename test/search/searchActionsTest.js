import expect from 'expect';
import {searchStart} from '../../src/search/searchActions';

describe('Search Actions', () => {
  // asychronous -> synchronous (only in test)
  it('sends a GET request to /search', () => {
    let actualThenFn = function() {};
    let fakePromise = {
      then: function(f) {
        actualThenFn = f;
      }
    };
    let criteria = {
      accountNumber: 'my-account-no-124',
      lastNameKana: 'my-last-name-kana',
      firstNameKana: 'my-first-name-kana',
      lastNameKanji: 'my-last-name-kanji',
      firstNameKanji: 'my-first-name-kanji',
      postCode1: '105',
      postCode2: '0011',
      address: 'my-address',
      phoneNumber: 'my-phone-number',
      emailAddress: 'my-email-address',
      prospectNumber: 'my-prospect-number',
      dateOfBirth: 'my-birthday'
    };

    // fetch should return promise
    let fetchSpy = expect.createSpy().andReturn(fakePromise);
    let dispatchSpy = expect.createSpy();

    let action = searchStart(criteria, fetchSpy);
    action(dispatchSpy);

    expect(fetchSpy).toHaveBeenCalledWith(
      '/search?accountNumber=my-account-no-124' +
      '&lastNameKana=my-last-name-kana' +
      '&firstNameKana=my-first-name-kana' +
      '&lastNameKanji=my-last-name-kanji' +
      '&firstNameKanji=my-first-name-kanji' +
      '&postCode1=105' +
      '&postCode2=0011' +
      '&address=my-address' +
      '&phoneNumber=my-phone-number' +
      '&emailAddress=my-email-address' +
      '&prospectNumber=my-prospect-number' +
      '&dateOfBirth=my-birthday'
    );

    actualThenFn(['one-result', 'two-result']);
    // when promise succeeds, store should be notified
    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'SEARCH_SUCCESS',
      results: ['one-result', 'two-result']
    });
  });
});
