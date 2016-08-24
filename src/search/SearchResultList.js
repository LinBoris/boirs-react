import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'; // eslint-disable-line no-unused-vars

export const mapStateToProps = state => {
  return {
    results: state.search.searchResults
  };
};

const SearchResultList = React.createClass({
  render: function() {
    let results = this.props.results.map(function(result, index) {
      return (
        <tr key={index}>
          <td>
            <Link to={`/${result.customerId}`}>
              {result.accountNumber}
            </Link>
          </td>
          <td>{result.kanjiName}</td>
          <td>{result.kanaName}</td>
          <td>{result.branchCode}</td>
          <td>{result.prospectNumber}</td>
          <td>{result.postCode}</td>
          <td>{result.address}</td>
          <td>{result.phoneNumber}</td>
          <td>{result.mailAddress}</td>
          <td>{result.dateOfBirth}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>口座番号</th>
            <th>名前（漢字）</th>
            <th>名前（半角かな）</th>
            <th>部店</th>
            <th>プロス番号</th>
            <th>郵便番号</th>
            <th>住所</th>
            <th>電話番号</th>
            <th>メールアドレス</th>
            <th>生年月日</th>
          </tr>
        </thead>
        <tbody>
          {results}
        </tbody>
      </table>
    );
  }
});

export default connect(mapStateToProps)(SearchResultList);
