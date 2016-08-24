import expect from 'expect';
import customerInfoReducer from '../../src/customerOverview/customerInfoReducer';
import {getCustomerSuccess} from '../../src/customerOverview/customerInfoActions';

describe('customer info reducer', () => {
  it('initializes the current customer state', () => {
    let result = customerInfoReducer(undefined, {});

    expect(result).toEqual({
      currentCustomer: {
        investmentExperience: []
      }
    });
  });

  it('saves the current customer', () => {
    let result = customerInfoReducer({}, getCustomerSuccess({customerId: 1}));

    expect(result.currentCustomer).toEqual({customerId: 1});
  });
});
