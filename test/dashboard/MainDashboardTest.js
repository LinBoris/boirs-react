import React from 'react'; // eslint-disable-line no-unused-vars
import expect from 'expect';
import {shallow} from 'enzyme';
/* eslint-disable no-unused-vars */
import {
  MainDashboard,
  mapStateToProps,
  mapDispatchToProps
} from '../../src/dashboard/MainDashboard';
import BasicInfo from '../../src/customerOverview/BasicInfo';
import ElectronicCommunication from '../../src/customerOverview/ElectronicCommunication';
import Communication from '../../src/customerOverview/communication';
import CustomerStatus from '../../src/customerOverview/CustomerStatus';
import ContactHistoryLink from '../../src/contactHistory/ContactHistoryLink';
import ContactRecordLink from '../../src/contactEntry/ContactRecordLink';
import KnowYourCustomer from '../../src/knowYourCustomer/KnowYourCustomer';
/* eslint-enable no-unused-vars */

describe('MainDashboard', () => {
  it('passes in the current customer ID', () => {
    let wrapper = shallow(
      <MainDashboard onComponentWillMount={() => {}} customerId={888}/>
    );

    expect(wrapper.find(BasicInfo).length).toEqual(1);
    expect(wrapper.find(ElectronicCommunication).length).toEqual(1);
    expect(wrapper.find(CustomerStatus).length).toEqual(1);
    expect(wrapper.find(KnowYourCustomer).length).toEqual(1);
    expect(wrapper.find(ContactHistoryLink).props().customerId).toEqual(888);
    expect(wrapper.find(ContactRecordLink).props().customerId).toEqual(888);
    expect(wrapper.find(Communication).length).toEqual(1);
    expect(wrapper.find(KnowYourCustomer).length).toEqual(1);
  });

  it('stores the current customer id', () => {
    let result = mapStateToProps(
      {customer: {currentCustomer: {}}},
      {params: {customerId: 777}}
    );

    expect(result.customerId).toEqual(777);
  });

  it('maps dispatch to a onComponentWillMount function', () => {
    let dispatchSpy = expect.createSpy();
    let actionSpy = expect.createSpy().andReturn('action-return-value');

    let props = mapDispatchToProps(dispatchSpy, {}, actionSpy);
    props.onComponentWillMount(555); // customer ID

    expect(actionSpy).toHaveBeenCalledWith(555);
    expect(dispatchSpy).toHaveBeenCalledWith('action-return-value');
  });

  it('calls the onComponentWillMount function', () => {
    let spy = expect.createSpy();
    shallow(
      <MainDashboard onComponentWillMount={spy}
                     customerId={777}
                     customer={{}} />
    );

    expect(spy).toHaveBeenCalledWith(777);
  });
});
