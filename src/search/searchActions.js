import {getJSON} from '../http/http';

export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';

// action creators
export const searchSuccess = results => {
  return {
    type: SEARCH_SUCCESS,
    results: results
  };
};

export const searchStart = (criteria, fetch = getJSON) => {
  return function(dispatch) {
    fetch(`/search?accountNumber=${encodeURIComponent(criteria.accountNumber)}` +
      `&lastNameKana=${encodeURIComponent(criteria.lastNameKana)}` +
      `&firstNameKana=${encodeURIComponent(criteria.firstNameKana)}` +
      `&lastNameKanji=${encodeURIComponent(criteria.lastNameKanji)}` +
      `&firstNameKanji=${encodeURIComponent(criteria.firstNameKanji)}` +
      `&postCode1=${encodeURIComponent(criteria.postCode1)}` +
      `&postCode2=${encodeURIComponent(criteria.postCode2)}` +
      `&address=${encodeURIComponent(criteria.address)}` +
      `&phoneNumber=${encodeURIComponent(criteria.phoneNumber)}` +
      `&emailAddress=${encodeURIComponent(criteria.emailAddress)}` +
      `&prospectNumber=${encodeURIComponent(criteria.prospectNumber)}` +
      `&dateOfBirth=${encodeURIComponent(criteria.dateOfBirth)}`
    ).then(function(results) {
      dispatch(searchSuccess(results));
    });
  };
};
