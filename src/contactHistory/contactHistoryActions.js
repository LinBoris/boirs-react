import {getJSON} from '../http/http';

export const GET_CONTACT_HISTORY_SUCCESS = 'GET_CONTACT_HISTORY_SUCCESS';

export const getContactHistorySuccess = function(contactRecords) {
  return {
    type: GET_CONTACT_HISTORY_SUCCESS,
    contactRecords: contactRecords
  };
};
export const getContactHistory = function(customerId, fetch = getJSON) {
  return dispatch => {
    fetch(`/${customerId}/contact-records`)
      .then(function(contactRecords) {
        dispatch(getContactHistorySuccess(contactRecords));
      });
  };
};
