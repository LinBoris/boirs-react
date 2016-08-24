import {getJSON} from '../http/http';

export const GET_CUSTOMER_SUCCESS = 'GET_CUSTOMER_SUCCESS';

// action creators
export const getCustomerSuccess = customer => {
  return {
    type: GET_CUSTOMER_SUCCESS,
    customer: customer
  };
};

export const getCustomer = (customerId, fetch = getJSON) => {
  return dispatch => {
    fetch(`/customers/${customerId}`)
      .then(function(customer) {
        dispatch(getCustomerSuccess(customer));
      });
  };
};
