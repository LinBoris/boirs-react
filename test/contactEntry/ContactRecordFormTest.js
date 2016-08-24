/* eslint-disable no-unused-vars */
import React from 'react';
import {
  ContactRecordForm,
  mapStateToProps,
  mapDispatchToProps
} from '../../src/contactEntry/ContactRecordForm';
/* eslint-enable no-unused-vars */
import {mount} from 'enzyme';
import expect from 'expect';

describe('ContactRecordForm', () => {
  it('calls the onSubmit function', () => {
    let submitSpy = expect.createSpy();
    let wrapper = mount(
      <ContactRecordForm customerId={1234} onSubmit={submitSpy} />
    );

    let memoField = wrapper.find('textarea#memo');
    memoField.simulate('change', {target: {value: 'some memo'}});
    let warningField = wrapper.find('input#warningFlag');
    warningField.simulate('change', {target: {checked: true}});

    wrapper.find('form').simulate('submit');

    expect(submitSpy).toHaveBeenCalledWith(
      1234,
      {memo: 'some memo', warningFlag: true}
    );
  });

  it('maps the customer id to props', () => {
    let props = mapStateToProps({customer: {currentCustomer: {customerId: 123}}});

    expect(props.customerId).toEqual(123);
  });

  it('maps an onSubmit to dispatch an action', () => {
    let dispatchSpy = expect.createSpy();
    let actionSpy = expect.createSpy().andReturn({type: 'ACTION'});
    let props = mapDispatchToProps(dispatchSpy, {}, actionSpy);

    props.onSubmit(1234, {memo: 'some memo'});

    expect(actionSpy).toHaveBeenCalledWith(1234, {memo: 'some memo'});
    expect(dispatchSpy).toHaveBeenCalledWith({type: 'ACTION'});
  });
});
