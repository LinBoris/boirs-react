import React from 'react';
import SearchForm from './SearchForm'; // eslint-disable-line no-unused-vars
import SearchResultList from './SearchResultList'; // eslint-disable-line no-unused-vars

const SearchPage = React.createClass({
  render: function() {
    return (
      <div>
        <SearchForm />
        <SearchResultList />
      </div>
    );
  }
});

export default SearchPage;
