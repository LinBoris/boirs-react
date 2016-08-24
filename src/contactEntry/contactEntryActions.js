import {postJSON} from '../http/http';

export const createRecord = (customerId, recordData, fetch = postJSON) => {
  return () => {
    fetch(`/${customerId}/contact-records`, recordData);
  };
};
