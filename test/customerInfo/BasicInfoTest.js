import expect from 'expect';
import {mapStateToProps} from '../../src/customerOverview/BasicInfo';

describe('BasicInfo', () => {
  it('maps current customer to basic info', () => {
    let result = mapStateToProps({customer: {currentCustomer: {
      kanaName: 'ドラモン',
      kanjiName: '銅羅門',
      branchCode: '123',
      accountNumber: '987654',
      prospectNumber: 'prospect-number',
      accountOpenDate: '2016/1/1',
      specAccountOpenDate: '2016/2/2'
    }}});

    expect(result.customerInfo.kanaName).toEqual('ドラモン');
    expect(result.customerInfo.kanjiName).toEqual('銅羅門');
    expect(result.customerInfo.branchCode).toEqual('123');
    expect(result.customerInfo.accountNumber).toEqual('987654');
    expect(result.customerInfo.prospectNumber).toEqual('prospect-number');
    expect(result.customerInfo.accountOpenDate).toEqual('2016/1/1');
    expect(result.customerInfo.specAccountOpenDate).toEqual('2016/2/2');
  });
});
