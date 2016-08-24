import {GET_CUSTOMER_SUCCESS} from './customerInfoActions';

const INITIAL_STATE = {
  currentCustomer: {
    investmentExperience: []
  }
};

const customerInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CUSTOMER_SUCCESS:
      // transform old state to new state.
      return Object.assign({}, state, {currentCustomer: action.customer});
    default:
      // otherwise, just return the state.
      return state;
  }
};

export default customerInfoReducer;
