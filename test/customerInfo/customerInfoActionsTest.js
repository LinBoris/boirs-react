import expect from 'expect';
import {getCustomer} from '../../src/customerOverview/customerInfoActions';

describe('Customer info actions', () => {
  it('gets a customer', () => {
    let actualThenFn = () => {};
    let dispatchSpy = expect.createSpy();
    let fakePromise = {
      then: function(f) {
        actualThenFn = f;
      }
    };
    let getJsonSpy = expect.createSpy().andReturn(fakePromise);

    let action = getCustomer(555, getJsonSpy); // create the action

    action(dispatchSpy);

    expect(getJsonSpy).toHaveBeenCalledWith('/customers/555');

    actualThenFn({customerId: 555});

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: 'GET_CUSTOMER_SUCCESS',
      customer: {customerId: 555}
    });
  });
});
