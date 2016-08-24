import expect from 'expect';
import {mapStateToProps} from '../../src/customerOverview/ElectronicCommunication';

describe('ElectronicCommunication', () => {
  it('maps current customer to communication info', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      isEveryDealingReport: false,
      isImportantNews: false,
      isOperationReport: false,
      isPeriodicDealingReport: false
    }}},
    {}
    );

    expect(result.communicationPreferences.isEveryDealingReport).toEqual("申込みなし");
    expect(result.communicationPreferences.isImportantNews).toEqual("申込みなし");
    expect(result.communicationPreferences.isOperationReport).toEqual("申込みなし");
    expect(result.communicationPreferences.isPeriodicDealingReport).toEqual("申込みなし");
  });
});
