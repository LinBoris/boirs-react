import {SEARCH_SUCCESS} from './searchActions';

const INITIAL_STATE = {searchResults: []};

const searchReducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return Object.assign({}, state, {searchResults: action.results});
    default:
      return state;
  }
};

export default searchReducer;
