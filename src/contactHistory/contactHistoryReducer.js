import {GET_CONTACT_HISTORY_SUCCESS} from './contactHistoryActions';

const INITIAL_STATE = {
  contactRecords: []
};

const contactHistoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CONTACT_HISTORY_SUCCESS:
      return Object.assign({}, state, {contactRecords: action.contactRecords});
    default:
      return state;
  }
};

export default contactHistoryReducer;
