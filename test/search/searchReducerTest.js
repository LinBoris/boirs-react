import expect from 'expect';
import searchReducer from '../../src/search/searchReducer';
import {searchSuccess} from '../../src/search/searchActions';

describe('Search reducer', () => {
  it('sets an initial state', () => {
    let result = searchReducer(undefined, {});

    expect(result).toEqual({searchResults: []});
  });

  it('updates the search results', () => {
    let result = searchReducer(undefined, searchSuccess(['one', 'two']));

    expect(result).toEqual({searchResults: ['one', 'two']});
  });
});
