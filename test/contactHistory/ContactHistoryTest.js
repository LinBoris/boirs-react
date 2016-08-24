import React from 'react'; // eslint-disable-line no-unused-vars
import expect from 'expect';
import {shallow} from 'enzyme';
/* eslint-disable no-unused-vars */
import {
  ContactHistory,
  mapDispatchToProps,
  mapStateToProps
} from '../../src/contactHistory/ContactHistory';
/* eslint-enable no-unused-vars */

describe('ContactHistory', () => {
  it('maps contact history state to props', () => {
    let state = {contactRecords: {contactRecords: [{
      contactRecordId: 2000773137,
      contactDate: '2016-08-08',
      callDuration: 60,
      callRepName: 'Saito Noriko',
      contactType: '着信呼',
      contactMemo: '100万円',
      categories: ['a', 'b', 'c'],
      warningFlag: true
    }]}};
    let ownProps = {params: {
      customerId: '12345'
    }};
    let expectedResults = [{
      contactRecordId: 2000773137,
      contactDate: '2016-08-08',
      callDuration: '00:01:00',
      callRepName: 'Saito Noriko',
      contactType: '着信呼',
      contactMemo: ['100万円'],
      categories: 'a / b / c',
      warningFlag: '有'
    }];
    let result = mapStateToProps(state, ownProps);
    expect(result.contactRecords).toEqual(expectedResults);
    expect(result.customerId).toEqual('12345');
  });

  it('splits memos with new-lines into an array', () => {
    let state = {contactRecords: {contactRecords: [{
      contactMemo: '100万円\nsome other line'
    }]}};

    let result = mapStateToProps(state, {params: {}});

    expect(result.contactRecords[0].contactMemo)
      .toEqual(['100万円', 'some other line']);
  });

  it('maps dispatch to a onComponentWillMount function', () => {
    let dispatchSpy = expect.createSpy();
    let actionSpy = expect.createSpy().andReturn('action return');
    let props = mapDispatchToProps(dispatchSpy, {}, actionSpy);

    props.onComponentWillMount(999);

    expect(actionSpy).toHaveBeenCalledWith(999);
    expect(dispatchSpy).toHaveBeenCalledWith('action return');
  });

  it('calls the onComponentWillMount function', () => {
    let spy = expect.createSpy();
    shallow(<ContactHistory onComponentWillMount={spy}
                            customerId={777}
                            contactRecords={[]}/>);
    expect(spy).toHaveBeenCalledWith(777);
  });
});
