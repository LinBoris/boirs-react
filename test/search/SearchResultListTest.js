import expect from 'expect';
import {mapStateToProps} from '../../src/search/SearchResultList';

describe('Search Result List', () => {
  it('maps the accounts to props', () => {
    let props = mapStateToProps({search: {searchResults: ['one', 'two']}});

    expect(props.results).toEqual(['one', 'two']);
  });
});
