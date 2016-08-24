import React from 'react'; // eslint-disable-line no-unused-vars
import expect from 'expect';
import {mount} from 'enzyme';
/* eslint-disable no-unused-vars */
import {mapDispatchToProps, SearchForm} from '../../src/search/SearchForm';
/* eslint-enable no-unused-vars */

describe('Search Form', () => {
  it('maps dispatch to props', () => {
    let dispatchSpy = expect.createSpy();
    let actionSpy = expect.createSpy().andReturn('some-action');
    let props = mapDispatchToProps(dispatchSpy, undefined, actionSpy);

    props.onSearchSubmit('some-search-criteria');

    expect(actionSpy).toHaveBeenCalledWith('some-search-criteria');
    expect(dispatchSpy).toHaveBeenCalledWith('some-action');
  });

  it('passes search criteria to action when submit button is clicked', () => {
    const clickHandlerSpy = expect.createSpy();
    const customer = {
      accountNumber: 'my-account-no-124',
      lastNameKana: 'my-last-name-kana',
      firstNameKana: 'my-first-name-kana',
      lastNameKanji: 'my-last-name-kanji',
      firstNameKanji: 'my-first-name-kanji',
      postCode1: 'my-post-code-1',
      postCode2: 'my-post-code-2',
      address: 'my-address',
      phoneNumber: 'my-phone-number',
      emailAddress: 'my-email-address',
      prospectNumber: 'my-prospect-number',
      dateOfBirth: 'my-birthday'
    };
    const component = mount(<SearchForm onSearchSubmit={clickHandlerSpy}/>);
    const accountNumber = component.find('input[name="accountNumber"]');
    const lastNameKana = component.find('input[name="lastNameKana"]');
    const firstNameKana = component.find('input[name="firstNameKana"]');
    const lastNameKanji = component.find('input[name="lastNameKanji"]');
    const firstNameKanji = component.find('input[name="firstNameKanji"]');
    const postCode1 = component.find('input[name="postCode1"]');
    const postCode2 = component.find('input[name="postCode2"]');
    const address = component.find('input[name="address"]');
    const phoneNumber = component.find('input[name="phoneNumber"]');
    const emailAddress = component.find('input[name="emailAddress"]');
    const prospectNumber = component.find('input[name="prospectNumber"]');
    const dateOfBirth = component.find('input[name="dateOfBirth"]');

    accountNumber.get(0).value = customer.accountNumber;
    lastNameKana.get(0).value = customer.lastNameKana;
    firstNameKana.get(0).value = customer.firstNameKana;
    lastNameKanji.get(0).value = customer.lastNameKanji;
    firstNameKanji.get(0).value = customer.firstNameKanji;
    postCode1.get(0).value = customer.postCode1;
    postCode2.get(0).value = customer.postCode2;
    address.get(0).value = customer.address;
    phoneNumber.get(0).value = customer.phoneNumber;
    emailAddress.get(0).value = customer.emailAddress;
    prospectNumber.get(0).value = customer.prospectNumber;
    dateOfBirth.get(0).value = customer.dateOfBirth;

    component.find('form').simulate('submit');

    expect(clickHandlerSpy).toHaveBeenCalledWith({
      accountNumber: 'my-account-no-124',
      lastNameKana: 'my-last-name-kana',
      firstNameKana: 'my-first-name-kana',
      lastNameKanji: 'my-last-name-kanji',
      firstNameKanji: 'my-first-name-kanji',
      postCode1: 'my-post-code-1',
      postCode2: 'my-post-code-2',
      address: 'my-address',
      phoneNumber: 'my-phone-number',
      emailAddress: 'my-email-address',
      prospectNumber: 'my-prospect-number',
      dateOfBirth: 'my-birthday'
    });
  });
});
